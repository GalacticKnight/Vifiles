import {useState} from 'react';

const Tools = () => {
    const [tools, setTools] = useState(['JavaScript', 'HTML', 'CSS', 'Bootstrap','React.js', 'Express.js', 'Node.js', 'MongoDB', 'TypeScript','Next.js','Tailwind','Prisma','Python', 'Flask', 'MySQL', 'MySQL Workbench','Git', 'Github', 'Wordpress','Java','C++', 'PostgreSQL','Mongoose','Figma']);


    return (
        <section className='darkSection toolsSection'>
            <div className='toolsBox'>
                <h3>Languages & Tools</h3>
                <div className='toolsGrid'>
                    {
                        tools.map(tool => (
                            <div className="toolsPill">
                                <h6>{tool}</h6>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Tools;
