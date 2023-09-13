import React from 'react';
import projectsArr from '../projects.json';
import { useParams } from 'react-router-dom';

export const ProjectDetails = () => {
  let { id } = useParams();
  const project = projectsArr.find((item) => id === item.id.toString());

  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='max-w-4xl w-full border-2'>
        <div className='mt-20 border'>
          <img
            className='w-full h-full'
            src={project?.devImage}
            alt={project?.name}
          />
        </div>
        <h2 className='text-3xl pt-4'>{project?.name}</h2>
        <p>{project?.description}</p>

        <ul className='flex'>
          {project?.techStack.map((e) => (
            <li className='p-2' key={e}>
              {e}
            </li>
          ))}
        </ul>
        {/* <pre>{project?.story}</pre> */}
        {/* <p className='whitespace-pre-line'>{project?.story}</p> */}
        <div className='html-string'>
          <HtmlRenderer htmlString={project?.story} />
        </div>
      </div>
    </div>
  );
};

function HtmlRenderer({ htmlString }: any) {
  // Use dangerouslySetInnerHTML to render HTML
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
