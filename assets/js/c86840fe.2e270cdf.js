"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[15611],{81831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));a(8209);const l={},r="xNFT",o={unversionedId:"applications/xNFT",id:"applications/xNFT",title:"xNFT",description:"- Team Name:  Starks",source:"@site/applications/xNFT.md",sourceDirName:"applications",slug:"/applications/xNFT",permalink:"/applications/xNFT",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/xNFT.md",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"The xNFT Pallet provides the following extrinsics (functions):",id:"the-xnft-pallet-provides-the-following-extrinsics-functions",level:4},{value:"A feature will be added to the XCM VM for minting NFt on target chain using the encoded data from source chain.",id:"a-feature-will-be-added-to-the-xcm-vm-for-minting-nft-on-target-chain-using-the-encoded-data-from-source-chain",level:4},{value:"This xNFT pallet will be tightly coupled with the NFT pallet in Substrate",id:"this-xnft-pallet-will-be-tightly-coupled-with-the-nft-pallet-in-substrate",level:4},{value:"Project does not include:",id:"project-does-not-include",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 xNFT Pallet",id:"milestone-1--xnft-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-",level:2}],c={toc:d},h="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"xnft"},"xNFT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team Name:"),"  Starks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payment Address:")," 0x2492237FA7698B8F3B35F2be4be3B1128439Ec8d (USDC) **"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 1")),(0,i.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,i.kt)("p",null,"This application is in response to the open RFP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md"},"xcm-tools")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Crosschain NFT Pallet is a unique initiative designed to facilitate the smooth movement of NFTs across various blockchain networks, utilizing the XCM protocol. Through the implementation of this pallet, individuals can effortlessly exchange NFTs between relay chains and parachains."),(0,i.kt)("h3",{id:"project-details"},"Project Details"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/anshulWeb3/Grants-Program/assets/100308982/9ad19535-10d4-4dbe-a2ac-4f1ba22f1c00",alt:"xNFT"})),(0,i.kt)("h4",{id:"the-xnft-pallet-provides-the-following-extrinsics-functions"},"The xNFT Pallet provides the following extrinsics (functions):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"transferSingleNFT(admin,collection_id, item_id, dest_collection_id, dest_item_id, mint_to, dest) \u2014> DispatchResult ; transfer an NFT with the NFT ID ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"admin \u2014 the owner of the NFT being sent."),(0,i.kt)("li",{parentName:"ul"},"collection_id \u2014 the ID of the collection of which the nft is being sent."),(0,i.kt)("li",{parentName:"ul"},"item_id \u2014 the ID of the NFT being sent."),(0,i.kt)("li",{parentName:"ul"},"dest_collection_id \u2014 the ID of the collection to which the nft is being sent."),(0,i.kt)("li",{parentName:"ul"},"dest_item_id \u2014 the ID of the NFT being created."),(0,i.kt)("li",{parentName:"ul"},"mint_to \u2014 the new owner of the NFT being sent.  "),(0,i.kt)("li",{parentName:"ul"},"dest \u2014 a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate).")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"transferMultiNFT(admin,collection_id, item_id, dest_collection_id, dest_item_id, mint_to, dest) \u2014> DispatchResult ; transfer multiple non-fungible tokens, defined by their multilocation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"admin \u2014 the owner of the NFT's being sent."),(0,i.kt)("li",{parentName:"ul"},"collection_id \u2014 the ID of the collection of which the nft is being sent."),(0,i.kt)("li",{parentName:"ul"},"item_id \u2014 the ID's of the multiple NFT's being sent."),(0,i.kt)("li",{parentName:"ul"},"dest_collection_id \u2014 the ID of the collection to which the nft is being sent."),(0,i.kt)("li",{parentName:"ul"},"dest_item_id \u2014 the ID's of the multiple NFT's being created."),(0,i.kt)("li",{parentName:"ul"},"mint_to \u2014 the new owner of the NFT's being sent. "),(0,i.kt)("li",{parentName:"ul"},"dest \u2014 a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate)")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"transferCollection(admin,collection_id, dest) \u2014> DispatchResult ; transfer a collection using collection id , defined by its multilocation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"admin \u2014 the owner of the collection. "),(0,i.kt)("li",{parentName:"ul"},"collection_id \u2014 the ID of the COLLECTION being sent."),(0,i.kt)("li",{parentName:"ul"},"dest \u2014 a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte addresses (Ethereum or Substrate)."))),(0,i.kt)("li",{parentName:"ol"},"transferCollectionOwnership(new_owner,collection_id, dest ) \u2014> DispatchResult ; transfer the collection ownership on another chain, defined by their multilocation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"new_owner \u2014 the new owner of the COLLECTION being sent."),(0,i.kt)("li",{parentName:"ul"},"collection_id \u2014 the IDs of the COLLECTION being sent."),(0,i.kt)("li",{parentName:"ul"},"dest \u2014 a multilocation to define the destination address for the tokens being sent via XCM. It supports different address formats, such as 20 or 32-byte  addresses (Ethereum or Substrate).")))),(0,i.kt)("h4",{id:"a-feature-will-be-added-to-the-xcm-vm-for-minting-nft-on-target-chain-using-the-encoded-data-from-source-chain"},"A feature will be added to the XCM VM for minting NFt on target chain using the encoded data from source chain."),(0,i.kt)("h4",{id:"this-xnft-pallet-will-be-tightly-coupled-with-the-nft-pallet-in-substrate"},"This xNFT pallet will be tightly coupled with the NFT pallet in Substrate"),(0,i.kt)("h4",{id:"project-does-not-include"},"Project does not include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This pallet does not let you create, mint or burn any NFT this just to send them to other chains by making use of the XCM functionality"),(0,i.kt)("li",{parentName:"ul"},"This pallet will not be able to transfer any NFT that is not registered using the NFT pallet for Substrate(i.e NFT deployed as smart contracts).")),(0,i.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The implementation of the xNFT pallet would introduce improved interoperability, expanded applications, increased liquidity, and enhanced flexibility to the Substrate ecosystem. It would foster the growth and vitality of the community, while facilitating seamless exchange and utilization of NFTs across different Substrate-based blockchains.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Interoperability: The xNFT pallet would enable effortless transfer of NFTs across various blockchains within the Substrate ecosystem. This would enhance connectivity and compatibility between Substrate-based chains, promoting a more integrated and interconnected ecosystem."),(0,i.kt)("li",{parentName:"ol"},"Expanded Applications: Cross-chain NFT transfers would unlock new possibilities and use cases for NFTs within the Substrate ecosystem. Developers and users would have the ability to leverage NFTs from different chains, enabling cross-chain collaborations, marketplace integrations, and enhanced utility for NFT-based applications."),(0,i.kt)("li",{parentName:"ol"},"Improved NFT Liquidity: By facilitating cross-chain transfers, the xNFT pallet would enhance liquidity for NFTs within the Substrate ecosystem. NFTs from different chains could be freely traded and utilized, expanding their market reach and creating more opportunities for value exchange."),(0,i.kt)("li",{parentName:"ol"},"Flexibility and Choice: The xNFT pallet would provide developers and users with the flexibility to choose the most suitable blockchain for their NFT requirements. They would be able to mint, transfer, and interact with NFTs on various Substrate chains, ensuring compatibility with specific needs or preferences."),(0,i.kt)("li",{parentName:"ol"},"Ecosystem Growth: The introduction of the xNFT pallet would contribute to the growth of the Substrate ecosystem, attracting developers and projects interested in building NFT-related applications or platforms. This would foster innovation and expand the range of offerings within the ecosystem."),(0,i.kt)("li",{parentName:"ol"},"Adoption of XCM: By utilizing XCM for cross-chain NFT transfers, the xNFT pallet would promote broader adoption of the Cross-Chain Messaging protocol within the Substrate ecosystem. This would reinforce the significance of interoperability and cross-chain communication, encouraging other projects and pallets to integrate XCM for various use cases."),(0,i.kt)("li",{parentName:"ol"},"Community Engagement: The xNFT pallet would generate interest among developers, NFT enthusiasts, and users within the Substrate community. It would encourage collaboration, knowledge sharing, and participation in the development of cross-chain NFT solutions, further strengthening community bonds and promoting ecosystem growth.")),(0,i.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,i.kt)("h3",{id:"team-members"},"Team members"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team lead:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tur461"},"Aqueel Abbas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team member:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ipsa11?tab=repositories"},"Ipsa Gupta"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Team member:")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/arunjot12?tab=repositories"},"Arunjot Singh")," ")),(0,i.kt)("h3",{id:"contact"},"Contact"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Name:")," Jatinder Singh"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,i.kt)("a",{parentName:"li",href:"mailto:jatindersngh116@gmail.com"},"jatindersngh116@gmail.com"))),(0,i.kt)("h3",{id:"legal-structure"},"Legal Structure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Address:")," C-208, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160059"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Registered Legal Entity:")," AntLabs India Pvt. Ltd.")),(0,i.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,i.kt)("p",null,"We are a skilled and dedicated group of professionals who possess extensive experience working with the Substrate ecosystem. Our team members have successfully completed numerous projects related to Substrate development, including building custom blockchains, implementing governance mechanisms, and designing smart contract for intuitive dApp functionalites. We understand the importance of technical partnerships in fostering innovation and growth within the blockchain industry. We are confident that our knowledge of the Substrate framework and its capabilities will enable us to contribute significantly to the development and expansion of Polka's ecosystem."),(0,i.kt)("p",null,"Stack exchange profiles of some of our team members:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/users/3136/wakar-seraj-khan"},"https://substrate.stackexchange.com/users/3136/wakar-seraj-khan")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/users/406/akash-singh"},"https://substrate.stackexchange.com/users/406/akash-singh")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/users/4068/upendra-singh"},"https://substrate.stackexchange.com/users/4068/upendra-singh"))),(0,i.kt)("p",null,"We are the technical partners for ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.peer.inc/"},"Peer Coin")),(0,i.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/xcm-tool.md"},"xcm-tools")),(0,i.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("h3",{id:"milestone-1--xnft-pallet"},"Milestone 1 \u2014 xNFT Pallet"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 weeks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Total Costs:")," 9800 USD")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FTE:"),"  2")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,i.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,i.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0a.")),(0,i.kt)("td",{parentName:"tr",align:null},"License"),(0,i.kt)("td",{parentName:"tr",align:null},"Apache 2.0 / GPLv3 / MIT / Unlicense")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0b.")),(0,i.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,i.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,i.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can transfer nft across chains")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0c.")),(0,i.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,i.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("strong",{parentName:"td"},"0d.")),(0,i.kt)("td",{parentName:"tr",align:null},"Docker"),(0,i.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"0e."),(0,i.kt)("td",{parentName:"tr",align:null},"Article"),(0,i.kt)("td",{parentName:"tr",align:null},"We will publish an ",(0,i.kt)("strong",{parentName:"td"},"article"),"/workshop that explains ","[...]"," (what was done/achieved as part of the grant). (Content, language and medium should reflect your target audience described above.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"1."),(0,i.kt)("td",{parentName:"tr",align:null},"xNFT"),(0,i.kt)("td",{parentName:"tr",align:null},"We will create a Substrate module that will handle cross-chain NFT transfers using these functions: 1. transferSingleNFT 2. transferMultiNFT 3. transferCollection 4. transferCollectionOwnership")))),(0,i.kt)("h2",{id:"future-plans"},"Future Plans"),(0,i.kt)("p",null,"Currently this project is solely to transfer NFT between Substrate based chains. In future we plan to extend this functionality to non-substrate chains like Ethereum, Solana etc. We also plan to extend the functionality of this pallet to substrate based solo-chains as well(solo to solo). We will also add support to transfer NFT deployed to the chains as smart contracts."),(0,i.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How did you hear about the Grants Program?")," A friend recommended"))}u.isMDXComponent=!0}}]);