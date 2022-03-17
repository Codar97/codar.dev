import React, {useState, useEffect} from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";
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
            description: ['Developed a UI component library  using React to be used across major products in the company.',
                'Developed and integrated product licence management and gateway management tools for the product line (ZTA,PCS,vTM).',
                'Developed and maintained a Web Application Firewall (vWAF).'],
            tools: ["JavaScript", "Python", "React", "Jenkins", "Docker", "Kubernetes", "Agile"],
            date: "2018-present",
            location: "Cambridge"
        },
        "freelance": {
            title: "Freelance",
            role: "Freelancer",
            description: ['Contributed to the development of open source projects',
                'Developed a MMO game in Java with a small player base of ~200',
                'Created lots of random fun projects'],
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
            </div>
        );
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
        },
        'Python': {
            skills: ['Proficient using testing frameworks including selenium.', 'Industry experience.', 'Test driven development.', 'Webserver development experience.']
        },
        'Java': {
            skills: ['Strong Object Orientated Programming skills.', 'Application development.', 'GUI Developmen.t', 'Experience using Maven.', 'Webserver development.']
        },
        'Rust': {
            skills: ['Experience Object Oriented Programming in Rust.', 'Experience with functional programming in Rust.']
        },
        'Haskell': {
            skills: ['Strong functional programming skills.']
        },
        'Erlang': {
            skills: ['Strong functional programming skills.', 'Network protocol development.']
        },
        'SQL': {
            skills: ['Experience using SQL databases.', 'Experience using SQL variations such as MYSQL & PostgreSQL.']
        },
        'PHP': {
            skills: ['Experience using PHP frameworks including CodeIgniter.']
        },
        'C++': {
            skills: ['Embedded system development.', 'Object Oriented Programming skills in C++.', 'GUI program development.', 'Game engine development using Unity and Unreal Engine.']
        },
        'C#': {
            skills: ['GUI program development.', 'Game engine development using Unity and Unreal Engine.']
        },
    }
    return (<div className="technical-skills">
        <Chart className={sideVisible ? "open" : ""} setSelected={setSelected} setSideVisible={(open) => {
            setSideVisible(open === undefined ? true : !open)
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
        let root = am5.Root.new("chartdiv");
        let chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));
        root.setThemes([
            am5themes_Dark.new(root),
            am5themes_Animated.new(root)

        ]);
        let series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{category}"
            }),
            alignLabels: false
        }));
        series.slices.template.events.on("click", function (ev) {
            setSelected(ev.target._dataItem.dataContext.category)
            setSideVisible(ev.target.get("active"))
            series.slices.each(function (slice) {
                if (slice !== ev.target && slice.get("active")) {
                    slice.set("active", false);
                }
            })
        });
        series.labels.template.setAll({
            fill: am5.color(0x9ba2b2),
            fontSize: '14px',
            text: "{category}",
            fontFamily: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New'],
            centerX: 0,
            centerY: 0
        });
        series.get("colors").set("colors", [
            am5.color(colors['JavaScript'].color),
            am5.color(colors['Python'].color),
            am5.color(colors['Java'].color),
            am5.color(colors['C++'].color),
            am5.color(colors['C#'].color),
            am5.color(colors['Rust'].color),
            am5.color(colors['Haskell'].color),
            am5.color(colors['Erlang'].color),
            am5.color(colors['PHP'].color),
            am5.color(colors['SQL'].color),

        ]);
        series.data.setAll([
            {value: 10, category: "JavaScript"},
            {value: 8, category: "Python"},
            {value: 9, category: "Java"},
            {value: 8, category: "C++"},
            {value: 8, category: "C#"},
            {value: 7, category: "Rust"},
            {value: 6, category: "Haskell"},
            {value: 6, category: "Erlang"},
            {value: 5, category: "PHP"},
            {value: 5, category: "SQL"},
        ]);

        series.appear(1000, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<div className={className} id={'chartdiv'}/>)
}

export default Home;
