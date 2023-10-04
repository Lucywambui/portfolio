import { Component } from '@angular/core';
import { project } from 'projects/models/projects.model';

@Component({
  selector: 'lib-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  
  projects: project[]= [
    {projectType:"SOFTWARE DEVELOPMENT", projectUrl: "assets/illuminer-logo-bg.png", projectName: 'Illuminer', projectDesc: 'A personal design project for a note taking website. A website generated on React is soon to come', projectLink:"https://www.figma.com/proto/IxwYzcyNYMHqRAnYtJMQev/Illuminer?page-id=0%3A1&type=design&node-id=17-2&viewport=82%2C417%2C0.07&scaling=scale-down&starting-point-node-id=4%3A5&show-proto-sidebar=1&mode=design&t=w4ipKVOrkTxsiNHk-1"},
    {projectType:"UX DESIGN",projectUrl:"assets/cafe-black-bg.png", projectName:"Cafe Black", projectDesc: "This is a design project, for a Reservation App for special events for a fabricated Cafe based in Nairobi. It is a display of my learning and understanding of all elements of UI/UX design.", projectLink:"https://docs.google.com/presentation/d/1IU0wUa6JMmnjqpL8Nx29kNbyULOIU1UmOQVp7tvHpqw/edit?usp=sharin" },
    {projectType:"SOFTWARE DEVELOPMENT",projectUrl:"assets/lou's-website-bg.png", projectName:"Lou's website", projectDesc:" A website I built for a baker and artist from the UK. The aim was to help market and reach a wider market during the COVID-19 period. I built using HTML, CSS, PHP and MySQL. Checkout", projectLink:'https://github.com/Lucywambui/Independent-Studies'},
    {projectType:"SOFTWARE DEVELOPMENT",projectUrl:"assets/elewa-logo.png", projectName:"Elewa Conversational Manager", projectDesc:" This was an open source project I worked on during my internship at Elewa Company Ltd in Nairobi. It was built on modern technologies like Angular, React.", projectLink:"https://github.com/italanta/elewa/pulls?q=is%3Apr+is%3Aclosed+author%3ALucywambui"}
  ];
  
}
