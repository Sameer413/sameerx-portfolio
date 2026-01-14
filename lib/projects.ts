import fs from "fs";
import { Project } from "@/types/project";
import path from "path";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY);

  return fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(PROJECTS_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { frontmatter } = extractFrontmatter(fileContents);

      return {
        id,
        title: frontmatter.title || id,
        description: frontmatter.description || "",
        date: frontmatter.date,
        author: frontmatter.author,
        tags: frontmatter.tags || [],
        tech_stack: frontmatter.tech_stack || [],
        cover_image: frontmatter.cover_image,
        published: frontmatter.published !== false,
      };
    });
}

export function getProjectById(id: string): Project | null {
  const mdxPath = path.join(PROJECTS_DIRECTORY, `${id}.mdx`);
  const mdPath = path.join(PROJECTS_DIRECTORY, `${id}.md`);

  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = extractFrontmatter(fileContents);

  return {
    id,
    title: frontmatter.title || id,
    description: frontmatter.description,
    date: frontmatter.date,
    author: frontmatter.author,
    tags: frontmatter.tags || [],
    tech_stack: frontmatter.tech_stack || [],
    cover_image: frontmatter.cover_image,
    published: frontmatter.published !== false,
    content,
  };
}

function extractFrontmatter(content: string): {
  frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    author?: string;
    tags?: string[];
    tech_stack?: { label: string; image: string }[];
    cover_image?: string;
    published?: boolean;
  };
  content: string;
} {
  const regex = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
  const match = content.match(regex);

  if (!match) {
    return { frontmatter: {}, content };
  }

  const raw = match[1];
  const body = content.replace(regex, "");

  const frontmatter: Record<string, any> = {};
  const lines = raw.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const idx = line.indexOf(":");
    
    if (idx === -1) {
      i++;
      continue;
    }

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    // Handle YAML array syntax for tech_stack (and other object arrays)
    // Check if tech_stack is followed by YAML array syntax (lines starting with "-")
    if (key === "tech_stack" && (value === "" || value === "[]") && i + 1 < lines.length && lines[i + 1]?.trim().startsWith("-")) {
      const arrayItems: { label: string; image: string }[] = [];
      i++; // Move to next line
      
      // Parse array items that start with "-"
      while (i < lines.length) {
        const currentLine = lines[i];
        const trimmed = currentLine.trim();
        
        // Check if this is still part of the array (starts with "-" or is indented)
        if (trimmed.startsWith("-")) {
          const item: { label?: string; image?: string } = {};
          
          // Parse property on the same line as "-" (e.g., "- label: "React"")
          const afterDash = trimmed.slice(1).trim();
          const propIdx = afterDash.indexOf(":");
          if (propIdx !== -1) {
            const propKey = afterDash.slice(0, propIdx).trim();
            let propValue = afterDash.slice(propIdx + 1).trim();
            
            // Remove quotes if present
            if (
              (propValue.startsWith('"') && propValue.endsWith('"')) ||
              (propValue.startsWith("'") && propValue.endsWith("'"))
            ) {
              propValue = propValue.slice(1, -1);
            }
            
            item[propKey as keyof typeof item] = propValue;
          }
          
          i++; // Move to next line
          
          // Parse additional object properties (indented lines)
          while (i < lines.length) {
            const propLine = lines[i];
            const propTrimmed = propLine.trim();
            
            // If we hit a non-indented line, we're done with this object
            if (propTrimmed === "" || (!propLine.startsWith(" ") && !propLine.startsWith("\t"))) {
              break;
            }
            
            // If we hit another "-" at the same indentation level, we're done with this object
            if (propTrimmed.startsWith("-")) {
              break;
            }
            
            const propIdx = propLine.indexOf(":");
            if (propIdx !== -1) {
              const propKey = propLine.slice(0, propIdx).trim();
              let propValue = propLine.slice(propIdx + 1).trim();
              
              // Remove quotes if present
              if (
                (propValue.startsWith('"') && propValue.endsWith('"')) ||
                (propValue.startsWith("'") && propValue.endsWith("'"))
              ) {
                propValue = propValue.slice(1, -1);
              }
              
              item[propKey as keyof typeof item] = propValue;
            }
            i++;
          }
          
          if (item.label && item.image) {
            arrayItems.push({ label: item.label, image: item.image });
          }
        } else if (trimmed === "" || (!currentLine.startsWith(" ") && !currentLine.startsWith("\t"))) {
          // Empty line or non-indented line means we're done with the array
          i--; // Back up one line so the outer loop can process it
          break;
        } else {
          i++;
        }
      }
      
      frontmatter[key] = arrayItems;
      i++;
      continue;
    }

    // boolean
    if (value === "true" || value === "false") {
      frontmatter[key] = value === "true";
      i++;
      continue;
    }

    // quoted string
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      frontmatter[key] = value.slice(1, -1);
      i++;
      continue;
    }

    // array (tags) - simple array format [item1, item2]
    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/['"]/g, ""));
      i++;
      continue;
    }

    // fallback string
    frontmatter[key] = value;
    i++;
  }

  return {
    frontmatter,
    content: body,
  };
}
