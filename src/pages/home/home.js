import React, {useState, useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import colors from '../projects/colors.json';

function Home() {
    return (<div className="home">
        <section>
            <h1>Welcome </h1>
            <br/>
            <p>
                This website contains some links and details on most of the things I have worked
                on. <br/>
                I like to work on some open source projects, make funny projects and artistic projects.<br/>
                I also have a deep interest in Quantum Security and have completed some research titled "Vulnerabilities
                in
                Messaging Apps to Quantum Attacks".<br/>
                I hope to further progress this research and work on more wacky projects. Check the projects page for
                some
                details on what I have been working on.
            </p>
        </section>
        <section>
            <h1>Experience</h1>
            <br/>
            <Experience/>
        </section>
        <section>
            <h1>Technical Skills</h1>
            <br/>
            <p className="technical-skills__subtext">Click for info</p>
            <TechnicalSkills/>
        </section>

    </div>);
}

function Experience() {
    const [selected, setSelected] = useState("pulse");
    const experience = {
        "pulse": {
            title: "Ivanti",
            subTitle: "(Previously Pulse Secure)",
            role: "Software Engineer",
            description: ['Developed a UI component library  using React to be used across major products in the company.', 'Developed and integrated product licence management and gateway management tools for the product line (ZTA,PCS,vTM).', 'Developed and maintained a Web Application Firewall (vWAF).'],
            tools: ["JavaScript", "Python", "React", "Jenkins", "Docker", "Kubernetes", "Agile"],
            date: "2018-present",
            location: "Cambridge"
        }, "freelance": {
            title: "Freelance",
            role: "Freelancer",
            description: ['Contributed to the development of open source projects', 'Developed a MMO game in Java with a small player base of ~200', 'Created lots of random fun projects'],
            tools: ["Python", "Java", "JavaScript", "React", "Rust", "C#", "C++"],
        }
    };
    const experienceList = Object.keys(experience);
    const ExperienceCard = ({title, subTitle, role, description, date, location, tools}) => {
        return (<div className="experience__card">
            <div className="experience__card__role">{role}</div>
            <div className="experience__card__sub-title">
                {title} {subTitle} {location ? `- ${location}` : ""} {date ? `- ${date}` : ""}
            </div>
            <ul className="experience__card__description">{description.map(item => <li>{item}</li>)}</ul>
            <div className="experience__card__tools">{tools.join(", ")}</div>
        </div>);
    }
    return (<div className="experience">
        <div className="experience__navigation">
            {experienceList.map(item => <div onClick={() => setSelected(item)}
                                             className={`experience__navigation__item${item === selected ? " experience__navigation__item--selected" : ""}`}>
                {experience[item].title}
            </div>)}
        </div>
        <div className="experience__border">
            <span style={{top: `${80 * experienceList.indexOf(selected)}px`}}/>
        </div>
        <ExperienceCard {...experience[selected]}/>
    </div>);
}

function TechnicalSkills() {
    const [selected, setSelected] = useState("JavaScript");
    const [sideVisible, setSideVisible] = useState(false);
    const technicalSkills = {
        'JavaScript': {
            skills: ['Proficient using frameworks including React.', 'Industry experience.', 'TypeScript experience.', 'Experience using Node.', 'Mobile App development using React Native.']
        }, 'Python': {
            skills: ['Proficient using testing frameworks including selenium.', 'Industry experience.', 'Test driven development.', 'Webserver development experience.']
        }, 'Java': {
            skills: ['Strong Object Orientated Programming skills.', 'Application development.', 'GUI Developmen.t', 'Experience using Maven.', 'Webserver development.']
        }, 'Rust': {
            skills: ['Experience Object Oriented Programming in Rust.', 'Experience with functional programming in Rust.']
        }, 'Haskell': {
            skills: ['Strong functional programming skills.']
        }, 'Erlang': {
            skills: ['Strong functional programming skills.', 'Network protocol development.']
        }, 'SQL': {
            skills: ['Experience using SQL databases.', 'Experience using SQL variations such as MYSQL & PostgreSQL.']
        }, 'PHP': {
            skills: ['Experience using PHP frameworks including CodeIgniter.']
        }, 'C++': {
            skills: ['Embedded system development.', 'Object Oriented Programming skills in C++.', 'GUI program development.', 'Game engine development using Unity and Unreal Engine.']
        }, 'C#': {
            skills: ['GUI program development.', 'Game engine development using Unity and Unreal Engine.']
        },
    }
    return (<div className="technical-skills">
        <Chart className={sideVisible ? "open" : ""} setSelected={setSelected} setSideVisible={(open) => {
            setSideVisible(open === undefined ? true : open)
        }}/>
        <div className={`technical-skills__side-panel${sideVisible ? " technical-skills__side-panel--open" : ""}`}>
            <div className="technical-skills__side-panel__title">
                {selected}
            </div>
            <div className="technical-skills__side-panel__content">
                <ul>
                    {technicalSkills[selected].skills.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    </div>);
}

function Chart({setSelected, setSideVisible, className}) {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        chart.innerRadius = am4core.percent(50);
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.slices.template.cursorOverStyle = [{
            "property": "cursor", "value": "pointer"
        }];
        pieSeries.alignLabels = false;
        pieSeries.slices.template.propertyFields.fill = "color";
        pieSeries.ticks.template.disabled = true;

        pieSeries.labels.template.fontFamily = ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New'];
        pieSeries.labels.template.fill = "#9ba2b2";
        pieSeries.labels.template.text = "{category}";
        pieSeries.slices.template.tooltipText = "{category}"

        pieSeries.slices.template.events.on("hit", function (ev) {
            let series = ev.target.dataItem.component;
            setSelected(ev.target.dataItem.properties.category)
            setSideVisible(ev.target.dataItem._slice.isActive)
            series.slices.each(function (item) {
                if (item.isActive && item != ev.target) {
                    item.isActive = false;
                }
            })
        });
        chart.data = [
            {value: 10, category: "JavaScript", color: colors["JavaScript"].color},
            {value: 8, category: "Python", color: colors["Python"].color},
            {value: 9, category: "Java", color: colors["Java"].color},
            {value: 8, category: "C++", color: colors["C++"].color},
            {value: 8, category: "C#", color: colors["C#"].color},
            {value: 7, category: "Rust", color: colors["Rust"].color},
            {value: 6, category: "Haskell", color: colors["Haskell"].color},
            {value: 6, category: "Erlang", color: colors["Erlang"].color},
            {value: 5, category: "PHP", color: colors["PHP"].color},
            {value: 5, category: "SQL", color: colors["SQL"].color}];

    }, [])
    return (<div className={className} id={'chartdiv'}/>)
}

export default Home;
