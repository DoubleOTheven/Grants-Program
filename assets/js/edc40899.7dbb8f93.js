"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6926],{79762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={},o="NuLink",i={unversionedId:"applications/NuLink",id:"applications/NuLink",title:"NuLink",description:"Proposer:*  Pawn",source:"@site/docs/applications/NuLink.md",sourceDirName:"applications",slug:"/applications/NuLink",permalink:"/Grants-Program/applications/NuLink",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Description",id:"project-description",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implement Nuproxy Pallet",id:"milestone-1-implement-nuproxy-pallet",level:3},{value:"Milestone 2 Implement Policy Pallet",id:"milestone-2-implement-policy-pallet",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2},{value:"Update &amp; Amendments",id:"update--amendments",level:2},{value:"2022/02/27",id:"20220227",level:3}],d={toc:u},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nulink"},"NuLink"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proposer:"),"  Pawn"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:"),"  0xf7410438ead9e89EEd5ca6e61a11E862C297ca0e")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Our project NuLink is trying to bridge the NuCypher Network to the Polkadot Ecosystem. The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nucypher.com/en/latest/index.html"},"NuCypher Network")," is a decentralized network of nodes that perform threshold cryptography operations serving users with secrets management and dynamic access control; in particular, NuCypher currently offers a threshold proxy re-encryption solution that enables secure data sharing which can be used to construct content management platforms, secure messaging, encrypted NFTs, and many other applications."),(0,r.kt)("p",null,"Through our project, users and applications from Polkadot could take advantage of NuCypher Network. For example, a user Alice in Polkadot could share her private data to another user Bob using the integration from our project, without worrying information leaking to any third party, thanks to NuCypher cryptographic assurance."),(0,r.kt)("p",null,"The main components of the project are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A Nuproxy pallet which can retrieve the information of stakers and bonding workers from NuCypher contracts in Ethereum to Polkadot parachain;"),(0,r.kt)("li",{parentName:"ol"},"A Policy pallet which holds policy fees and distributes them to nodes of the network.")),(0,r.kt)("h3",{id:"project-description"},"Project Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the NuCypher Network, all the cryptography operations are currently performed in an off-chain side channel. We can reuse this side channel in our project. We only need to take care of the on-chain operation from Ethereum to Polkadot. The on-chain operation mainly includes two parts: Stakers need to register and get rewards on-chain, while Alice needs to grant access to Bob and pay fees to stakers on-chain. NuLink would focus on migrating the on-chain operation from Ethereum to the Polkadot parachain."),(0,r.kt)("li",{parentName:"ul"},"We will develop a Nuproxy pallet which can retrieve the information of stakers and bonding workers from Nucypher contracts in Ethereum. At the current stage we consider constructing a watcher network managed by the NuCypher team. The watcher network would relay such information to the Nuproxy pallet. "),(0,r.kt)("li",{parentName:"ul"},"The watcher network  is simply constructed by a single watcher node in the current version. The Nuproxy pallet would check the signature of the watcher node to pass the update request. And in the future we would expand the watcher network to a multi-signature network constructed by a certain number(say N) of watcher nodes. And their corresponding public key would be recorded in the Nuproxy pallet when first deployed.  The update request must obtain more than the 2/3 signature of the total watcher nodes to be valid. The Nuproxy pallet would check the signature  when receiving the update request.  The locking period of Ursulas network is 1days, so the watcher network would send the update request at the same pace."),(0,r.kt)("li",{parentName:"ul"},"In the future we may use ETH-Polkadot bridge such as Snowbridge to retrieve such information from Ethereum instead of the watcher network. The details would be updated once we finish the design."),(0,r.kt)("li",{parentName:"ul"},"We would also develop a Policy pallet which can hold policy fees and distribute them in the Polkadot parachain. Through this pallet, Alice in Polkadot could issue a policy in the polkadot parachain and pay the policy fee in the Polkadot parachain. And the worker of Ursulas could withdraw the reward in the Polkadot parachain.  ")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pawn"),(0,r.kt)("li",{parentName:"ul"},"Sam")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pawn: Currently pursuing a PHD degree in cryptography from UCAS. Familiar with most cryptographic technology such as Fully Homomorphic Encryption,  Zero Knowledge Proof and Secure Multi-party Computation. "),(0,r.kt)("li",{parentName:"ul"},"Sam: Tutor for Blockchain Engineer Lecture Hall of Internet Industry Research Institute of Tsinghua University;  Former Huobi technical expert; proficient in DEFI project development, developer of  KOKOSWAP, Perpexchange, TMK NFT, YFX.")),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/pawnz0/NuLink"},"https://github.com/pawnz0/NuLink")),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 6 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 10,000 DAI.")),(0,r.kt)("h3",{id:"milestone-1-implement-nuproxy-pallet"},"Milestone 1 Implement Nuproxy Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both documentation of the code and a basic tutorial that explains how a user can use the pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"register_watcher"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would record the public key of the watcher nodes and would be executed when the Nuproxy pallet first deployed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"UpdateStakers"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would provide the functionality of updating the information of current stakers and bonding workers of Ursulas network. It will be restricted to watchers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"GetActiveStakers"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would return a list of active stakers by random sampling.")))),(0,r.kt)("h3",{id:"milestone-2-implement-policy-pallet"},"Milestone 2 Implement Policy Pallet"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 month"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 5,000 DAI")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0b."),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both documentation of the code and a basic tutorial that explains how a user can use this pallet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0c."),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"This milestone will have unit-test for each function to ensure functionality. In the guide we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"CreatePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would lock the fee for a specific policy for a locking period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"RevokePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would revoke a specific policy and refund the unconsumed policy fee depending on the locking period.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Mint"),(0,r.kt)("td",{parentName:"tr",align:null},"This function would computes and transfers the policy fee to the staker\u2019s account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"The staker could call this function to claim the reward fee.")))),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"We have discussed this project  with the NuCypher core team and got some technical support from the NuCypher team. "),(0,r.kt)("p",null,"We have implemented the watcher nodes  independently and not funded by this proposal. The owner who deployed the Nuproxy pallet could either manually update the information from Ethereum,  or use our watcher node updating it automatically. Here is the (link)",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NuLink-network/nulink-watcher"},"the watcher nodes"),"."),(0,r.kt)("h2",{id:"update--amendments"},"Update & Amendments"),(0,r.kt)("h3",{id:"20220227"},"2022/02/27"),(0,r.kt)("p",null,"We  underestimated the total work and the time-line has now been exceeded by several months. We have already  submitted our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grant-Milestone-Delivery/pull/367"},"work")," and are waiting for review."),(0,r.kt)("p",null,"This amendment updates the name of the mirror pallet to the Nuproxy pallet,  and the name of the Policy Management pallet to Policy pallet. "),(0,r.kt)("p",null,"We have decided to implement the watcher network as one single node in the current version. And we will keep working on this and support the multi-nodes network in the future."))}m.isMDXComponent=!0}}]);