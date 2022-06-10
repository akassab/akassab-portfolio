import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postExperiencesDirectory = path.join(process.cwd(), 'posts/experiences');
const postProjectsDirectory = path.join(process.cwd(), 'posts/projects');

function getSortedPostData(directory) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getSortedPostProjectData() {
  return getSortedPostData(postProjectsDirectory);
}

export function getSortedPostExperiencesData() {
  return getSortedPostData(postExperiencesDirectory);
}

function getAllPostExperienceIds() {
  const fileNames = fs.readdirSync(postExperiencesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

function getAllPostProjectIds() {
  const fileNames = fs.readdirSync(postProjectsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllPostIds() {
  return getAllPostExperienceIds().concat(getAllPostProjectIds());
}

export async function getPostData(id) {
  let fullPath;
  let fileContents;
  try {
    fullPath = path.join(postExperiencesDirectory, `${id}.md`);
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch (err) {
    fullPath = path.join(postProjectsDirectory, `${id}.md`);
    fileContents = fs.readFileSync(fullPath, 'utf8');
  }

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
