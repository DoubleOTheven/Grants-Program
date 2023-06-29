"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[32894],{9976:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));a(95657);const l={},n="Sirato (Epirus) Substrate Explorer - Phase III",s={unversionedId:"applications/sirato_substrate_phase3",id:"applications/sirato_substrate_phase3",title:"Sirato (Epirus) Substrate Explorer - Phase III",description:"-   Project Name: Sirato (Epirus) Substrate Explorer - Phase III",source:"@site/applications/sirato_substrate_phase3.md",sourceDirName:"applications",slug:"/applications/sirato_substrate_phase3",permalink:"/applications/sirato_substrate_phase3",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/sirato_substrate_phase3.md",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"Project Overview",id:"project-overview",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"<strong>Network Data Support</strong>",id:"network-data-support",level:4},{value:"Mock-ups",id:"mock-ups",level:4},{value:"Technology Stack",id:"technology-stack",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1",id:"milestone-1",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Future Plans",id:"future-plans",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sirato-epirus-substrate-explorer---phase-iii"},"Sirato (Epirus) Substrate Explorer - Phase III"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Name:")," Sirato (Epirus) Substrate Explorer - Phase III"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Team Name:")," Web3 Labs Ltd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payment Address:")," Fiat payment address provided on invoice dated 23/06/2023."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 2")),(0,o.kt)("h2",{id:"project-overview"},"Project Overview"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We recently rebranded from Epirus to Sirato")),(0,o.kt)("p",null,"This is an application for a follow-up grant for the Epirus Substrate Explorer that has completed two grants previously:"),(0,o.kt)("p",null,"Phase I:"),(0,o.kt)("br",null),"[Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_explorer.md)",(0,o.kt)("br",null),"[Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/527)",(0,o.kt)("p",null,"Phase II:"),(0,o.kt)("br",null),"[Application](https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md)",(0,o.kt)("br",null),"[Milestone 1 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/652)",(0,o.kt)("br",null),"[Milestone 2 Delivery](https://github.com/w3f/Grant-Milestone-Delivery/pull/742)",(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"From our previous grants we have built:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://substrate.sirato.xyz/"},"Wasm contracts explorer")," that supports smart contracts deployed on ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/web3labs/ink-verifier-server"},"verifier service")," that verifies, through reproducible builds, the source code files for a specific on-chain code hash.")),(0,o.kt)("p",null,"In this grant, we intend to expand Sirato to support essential base data such as blocks, extrinsics and system events. "),(0,o.kt)("h3",{id:"project-details"},"Project Details"),(0,o.kt)("p",null,"In our current architecture, there are several components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Squid Archive (built on the Subsquid framework): the squid archive connects to the Substrate network node and indexes base data such as blocks and extrinsics, exposing a GraphQL API "),(0,o.kt)("li",{parentName:"ul"},"Squid Processor (built on Subsquid framework): the squid processor ingests data from the squid archive, filtering and transforming the relevant data to the data models for the Explorer. Currently, our squid processor is focused on Wasm contract data from ",(0,o.kt)("inlineCode",{parentName:"li"},"pallet-contracts"),". The squid processor exposes a GraphQL API."),(0,o.kt)("li",{parentName:"ul"},"Explorer UI: The explorer UI is made up of a set of composable components that consumes the API of the Squid processor and renders the web application.")),(0,o.kt)("p",null,"The below diagram illustrates the high-level architecture and how the components interact with each other:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=1BVgvcQPCwGa3BJyD__z-wXKgzyt9mBbG",alt:"Current Architecture"})),(0,o.kt)("p",null,"In this grant, we will add data handlers and data models for the base data. Since the Squid Archive directly exposes the network base data of blocks and extrinsics, we will use the GraphQL API of the squid archive in the UI to retrieve this data. "),(0,o.kt)("h4",{id:"network-data-support"},(0,o.kt)("strong",{parentName:"h4"},"Network Data Support")),(0,o.kt)("p",null,"The Squid Archive already exposes blocks, extrinsics and events data through its GraphQL API. We will consume this API from the explorer UI and build the components to show:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Blocks list"),(0,o.kt)("li",{parentName:"ul"},"Extrinsics list"),(0,o.kt)("li",{parentName:"ul"},"Block page: contains block details and all extrinsics and events included in this block"),(0,o.kt)("li",{parentName:"ul"},"Extrinsics page: contains extrinsic details and all events emitted from the extrinsic")),(0,o.kt)("h4",{id:"mock-ups"},"Mock-ups"),(0,o.kt)("p",null,"Mock up of how an extrinsic page will look:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://drive.google.com/uc?id=112GANJWuaxcFJBbhS6-I9ubGMfi9pV-N",alt:"Extrinsic Page"})),(0,o.kt)("h3",{id:"technology-stack"},"Technology Stack"),(0,o.kt)("p",null,"We plan to build on top of our current explorer, so we will continue using the same technology stack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.subsquid.io/"},"Subsquid Framework"),", with Typescript, for data processing."),(0,o.kt)("li",{parentName:"ul"},"React.js and Tailwindcss for the UI")),(0,o.kt)("h3",{id:"out-of-scope"},"Out of Scope"),(0,o.kt)("p",null,"Due to time and resource constraints, we will leave the following items for future development:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Additional query endpoints for interrogating the contract registry"),(0,o.kt)("li",{parentName:"ul"},"The ability to interact directly with verified smart contracts")),(0,o.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,o.kt)("p",null,"There is currently a lack of high-quality open-source explorers for smart contract networks in the Substrate ecosystem. Polkadot.js is the de facto explorer and it is very modular and flexible. However, it was designed more for development and lacks the ability to filter, sort and search through data on the network. In the space of user-facing explorers, Subscan is currently the most popular solution and has the most comprehensive support for Substrate pallets. On the other hand, Subscan is mostly close-sourced and introduces an economic entry barrier for new networks. "),(0,o.kt)("p",null,"This dominance by Subscan is something that has been highlighted recently during an in-depth ",(0,o.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/subscan-ought-to-change-its-business-model-or-be-replaced/2357"},"discussion on the Polkadot Forum"),". "),(0,o.kt)("p",null,"While a number of open-source alternatives have emerged, none of them have support for smart contracts. In our previous grants, we have expanded the open-source explorer offerings to include WASM contracts on Substrate. At the same time, we also want to provide the essential base data like blocks and extrinsics so that smart contract networks can have a feature-complete explorer at their fingertips."),(0,o.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 1 month"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):")," 2 FTE"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Total Costs:")," 25,000 EUR")),(0,o.kt)("h3",{id:"milestone-1"},"Milestone 1"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"N\xba"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Deliverable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Specification"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0a."),(0,o.kt)("td",{parentName:"tr",align:"left"},"License"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Apache 2.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0b."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Documentation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"We will provide inline documentation of the code and documentation on how to set up an explorer instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0c."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Testing Guide"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Core functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests in the guide.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0d."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Docker"),(0,o.kt)("td",{parentName:"tr",align:"left"},"We will provide a Dockerfile and Docker Compose file(s) to ease the deployment and execution of the system.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"1."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Updated Explorer UI - Base data support"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Explorer UI will connect to the Squid archive GraphQL endpoint and display block, extrinsic and system event data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"2."),(0,o.kt)("td",{parentName:"tr",align:"left"},"Public explorer instance"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A publicly accessible instance of the Explorer connected to a development network with WASM smart contracts support, with additional display of blocks, extrinsics and events.")))),(0,o.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,o.kt)("h3",{id:"contact"},"Contact"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Name:")," Conor Svensson"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,o.kt)("a",{parentName:"li",href:"mailto:conor@web3labs.com"},"conor@web3labs.com")," ")),(0,o.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Address:")," 7 Bell Yard, London, England, WC2A 2JR"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," Web3 Labs Ltd, CRN 10783824")),(0,o.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/web3labs"},"https://github.com/web3labs"))),(0,o.kt)("h2",{id:"future-plans"},"Future Plans"),(0,o.kt)("p",null,"We plan to add open-source support to other popular Substrate pallets in the future. Some interesting pallets we are considering are assets and XCM related pallets, to be able to track asset movements across the DotSama networks. "),(0,o.kt)("p",null,"The Frontier EVM and EVM+ pallet by Acala are also valuable addition to the ecosystem that we wish to support at some point. On top of that, we also plan to add some proprietary modules for the explorer to be able to sustain our growth long-term. Our goal is to provide a full-fledged open-core explorer with comprehensive data and intuitive UI that networks can customise to their needs."),(0,o.kt)("p",null,"Besides the core explorer, we also want to expand the functionality of our ink! verifier service. Right now, it only supports the verification and metadata hosting of ink! smart contracts. "),(0,o.kt)("p",null,"Our goal is to support any WASM smart contracts and evolve the service to a multi-VM metadata registry that can scale up to cater for the entire Substrate and DotSama ecosystems."))}d.isMDXComponent=!0}}]);