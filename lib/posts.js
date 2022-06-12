import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postEducationDirectory = path.join(process.cwd(), 'posts/education');
const postExperiencesDirectory = path.join(process.cwd(), 'posts/experiences');
const postCommunityInvolvementDirectory = path.join(
  process.cwd(),
  'posts/community',
);
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

export function getSortedPostEducationData() {
  return getSortedPostData(postEducationDirectory);
}
export function getSortedPostExperiencesData() {
  return getSortedPostData(postExperiencesDirectory);
}
export function getSortedCommunityInvolvementData() {
  return getSortedPostData(postCommunityInvolvementDirectory);
}
export function getSortedPostProjectData() {
  return getSortedPostData(postProjectsDirectory);
}

function getAllPostEducationIds() {
  const fileNames = fs.readdirSync(postEducationDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
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
function getAllPostCommunityInvolementIds() {
  const fileNames = fs.readdirSync(postCommunityInvolvementDirectory);
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
  return getAllPostEducationIds()
    .concat(getAllPostExperienceIds())
    .concat(getAllPostCommunityInvolementIds())
    .concat(getAllPostProjectIds());
}

export async function getPostData(id) {
  let fullPath;
  let fileContents;
  let found = false;

  fullPath = path.join(postEducationDirectory, `${id}.md`);
  if (fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
    found = true;
  }

  fullPath = path.join(postExperiencesDirectory, `${id}.md`);
  if (!found && fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
    found = true;
  }

  fullPath = path.join(postCommunityInvolvementDirectory, `${id}.md`);
  if (!found && fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
    found = true;
  }

  fullPath = path.join(postProjectsDirectory, `${id}.md`);
  if (!found && fs.existsSync(fullPath)) {
    fileContents = fs.readFileSync(fullPath, 'utf8');
    found = true;
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
