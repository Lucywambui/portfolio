import { Component } from '@angular/core';
import { project } from 'projects/models/projects.model';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  
  projects: project[]= [
    {projectType:"UX DESIGN", projectUrl: "assets/illuminer-logo-bg.png", projectName: 'Illuminer', projectDesc: 'A personal design project for a pan-African library. A website generated on React is soon to come', projectLink:"https://www.figma.com/proto/IxwYzcyNYMHqRAnYtJMQev/Illuminer?page-id=0%3A1&type=design&node-id=142-139&viewport=-3729%2C415%2C0.62&t=O5nHUaCpjF2ZPTne-1&scaling=scale-down&starting-point-node-id=115%3A3&mode=design", projectLink2:''},
    {projectType:"UX DESIGN",projectUrl:"assets/cafe-black-bg.png", projectName:"Cafe Black", projectDesc: "This is a design project, for a Reservation App for special events for a fabricated Cafe based in Nairobi. It is a display of my learning and understanding of all elements of UI/UX design.", projectLink:"https://docs.google.com/presentation/d/1IU0wUa6JMmnjqpL8Nx29kNbyULOIU1UmOQVp7tvHpqw/edit?usp=sharin" },
    {projectType:"SOFTWARE DEVELOPMENT",projectUrl:"assets/Dalila.png", projectName:"Dalila", projectDesc: "This is an e-commerce body care and skincare shop. I am currently building it using angular technologies", projectLink:'https://dalila-lucywambui.vercel.app/', projectLink2: "https://www.figma.com/proto/CRKZScMCHBZH3WZXBVyW13/e-commerce-web-project?page-id=0%3A1&type=design&node-id=11-154&viewport=-2122%2C391%2C0.34&t=jS3Nwrd1QuXfHuHd-1&scaling=scale-down&starting-point-node-id=11%3A154&mode=design" },
    {projectType:"SOFTWARE DEVELOPMENT",projectUrl:"assets/lou's-website-bg.png", projectName:"Lou's website", projectDesc:" A website I built for a baker and artist from the UK. The aim was to help market and reach a wider market during the COVID-19 period. I built using HTML, CSS, PHP and MySQL, and Mobile App Design in Figma.", projectLink:'https://github.com/Lucywambui/Independent-Studies', projectLink2:'https://www.figma.com/proto/4guiyubRdSX9XX5xoJmxVh/Untitled?page-id=0%3A1&type=design&node-id=5-51&viewport=-1050%2C307%2C0.58&t=ueDDDpEaTtKiGUl4-1&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design'},
    {projectType:"SOFTWARE DEVELOPMENT",projectUrl:"assets/elewa-logo.png", projectName:"Elewa Conversational Manager", projectDesc:" This was an open source project I worked on during my internship at Elewa Company Ltd in Nairobi. It was built on modern technologies like Angular, React.", projectLink:"https://github.com/italanta/elewa/pulls?q=is%3Apr+is%3Aclosed+author%3ALucywambui", projectLink2:""}
  ];
  
}
