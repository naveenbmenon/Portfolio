import React, { useEffect, useRef } from "react";
import "./projects.css";
import { Link } from "react-router-dom"; // Import Link for routing
import gsap from "gsap";

const projectList = [
  { id: "p0", name: "Project", description: "Description of Project", status: "Status", link: "/" },
  { id: "p1", name: "Finance Manager", description: "Developed a web app to track expenses, manage budgets, set goals, monitor EMIs, and manage stock portfolios.", status: "In Progress", link: "/finance-manager" },
  { id: "p2", name: "Driver Fatigue Detection", description: "Developed an ML-based driver fatigue detection system using EEG signals and various algorithms to improve road safety.", status: "In Progress", link: "/driver-fatigue-detection" },
  { id: "p3", name: "Case Study", description: "More Later", status: "Pending", link: "/case-study" }, // Correct the link here
];



const Projects = React.forwardRef((props, ref) => {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);

  useEffect(() => {
    const projects = projectsRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;

    if (!projects || !preview || !previewImg) return;

    const moveStuff = (e) => {
      gsap.to(preview, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    gsap.set(preview, { scale: 0, opacity: 0 });

    const showPreview = (e) => {
      const projectId = e.currentTarget.id;

      const imagePaths = {
        p1: '/images/finance-preview.png',
        p2: '/images/ml-preview.png',
        p3: '/images/case-preview.png',
      };

      const imagePath = imagePaths[projectId] || '/src/images/project1.png';
      previewImg.style.backgroundImage = `url(${imagePath})`;
      gsap.to(preview, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const hidePreview = () => {
      gsap.to(preview, { scale: 0, opacity: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", moveStuff);

    const projectItems = Array.from(projects.children).filter(child => child.classList.contains("project"));

    projectItems.forEach((item) => {
      if (item.id !== "p0") { 
        item.addEventListener("mouseenter", showPreview);
        item.addEventListener("mouseleave", hidePreview);
      }
    });

    return () => {
      window.removeEventListener("mousemove", moveStuff);
      const projectItems = projects.querySelectorAll('.project');
      projectItems.forEach((item) => {
        if (item.id !== "p0") {
          item.removeEventListener("mouseenter", showPreview);
          item.removeEventListener("mouseleave", hidePreview);
        }
      });
    };
  }, []);

  return (
    <section id="projects_section" className="projects_section" ref={ref}>
      <div className="project-heading">Projects & Case Studies</div>
      <div className="preview" ref={previewRef}>
        <div className="preview-img" ref={previewImgRef}></div>
      </div>
      <div className="container">
        <div className="projects" ref={projectsRef}>
          {projectList.map((project) => (
            <Link 
              to={project.link} // Link to the project's specific page
              key={project.id}
              className={`project ${project.id === 'p0' ? 'project-p0' : ''}`}
              id={project.id}
            >
              <div className="name">
                <p>{project.name}</p>
              </div>
              <div className="info">
                <p>{project.description}</p>
              </div>
              <div className="status">
                <p>{project.status}</p>
              </div>
            </Link> // Wrap each project in a Link component
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
