'use strict';

const stages = [
  {name:'New',color:'slate'}, {name:'Qualifying',color:'blue'},
  {name:'Estimate',color:'gold'}, {name:'Scheduled',color:'teal'},
  {name:'In progress',color:'violet'}, {name:'Completed',color:'green'},
  {name:'Closed',color:'rose'}
];
const services = [
  'Roofing','Gutters','Siding','Insulation','Vapor barriers','Sump pumps',
  'Dehumidification','Water mitigation / restoration','Fire restoration',
  'Mold assessment','Mold remediation','Flooring','Construction','Renovation',
  'Carpentry','Excavation','Septic','Foundation repair','Basement waterproofing',
  'B-Dry systems','French drains','Property services','Handyman / small repairs','Other'
];
const sources = ['Direct relationship','BNI','TBD Connections','Existing customer','Partner / contractor','Professional referral','Other'];
const companies = [
  {name:'G&G Construction',initials:'GC',color:'blue',person:'Sven Granholm',status:'Preferred',trades:['Construction','Renovation','Roofing','Siding','Carpentry','Flooring'],summary:'Construction and renovation coordination, from envelope work to interior improvements.'},
  {name:'Seamless Gutter Solutions',initials:'SG',color:'teal',status:'Preferred',trades:['Gutters'],summary:'Seamless gutter installations, replacements and leaf protection.'},
  {name:'Mold Bros',initials:'MB',color:'violet',person:'Kyle Stoddard',status:'Preferred',trades:['Mold assessment','Mold remediation','Dehumidification'],summary:'Mold remediation and indoor air quality support.'},
  {name:'Basement Bros',initials:'BB',color:'blue',person:'Owen Stoddard',status:'Preferred',trades:['Basement waterproofing','Vapor barriers','Sump pumps','French drains','Foundation repair'],summary:'Basement waterproofing, drainage, and moisture control.'},
  {name:'Insulation Bros',initials:'IB',color:'gold',status:'Approved',trades:['Insulation','Vapor barriers'],summary:'Insulation and building-envelope improvements.'},
  {name:'B-Dry',initials:'BD',color:'teal',status:'Partner',trades:['B-Dry systems','Basement waterproofing','Sump pumps'],summary:'B-Dry systems and below-grade water management.'},
  {name:'Resto Bros',initials:'RB',color:'rose',status:'Partner',trades:['Water mitigation / restoration','Fire restoration'],summary:'Water mitigation, fire restoration, and property recovery.'},
  {name:'G&G Excavation',initials:'GE',color:'gold',status:'Approved',trades:['Excavation','Septic','French drains'],summary:'Excavation, site preparation, drainage, and septic coordination.'},
  {name:'Bell Property Services',initials:'BP',color:'green',status:'Partner',trades:['Property services','Handyman / small repairs','Carpentry'],summary:'Property upkeep, smaller repairs, and on-site service coordination.'},
  {name:'G&G Holdings',initials:'GH',color:'slate',trades:[],summary:'Participating company in the broader Iron Bridge network.'}
];
const providers = companies.filter((company) => company.status);
const dayFormat = new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'2-digit',day:'2-digit',timeZone:'America/Chicago'});
const today = dayFormat.format(new Date());
function offsetDay(offset) {
  const date = new Date(today + 'T12:00:00Z');
  date.setUTCDate(date.getUTCDate() + offset);
  return date.toISOString().slice(0,10);
}
const nextWeek = offsetDay(7);
const seed = [
  ['David R.','Roof and gutter replacement',['Roofing','Gutters'],'G&G Construction','Estimate','Direct relationship',-11,0,'Confirm site visit and gutter scope','Roof and gutters were discussed together. Coordinate gutter scope with Seamless Gutter Solutions.'],
  ['Baraldi Construction','Finish carpentry support',['Carpentry','Renovation'],'G&G Construction','Scheduled','Partner / contractor',-17,1,'Confirm crew availability','Existing contractor relationship. Confirm site access with the project lead.'],
  ['RPEX Consulting','Multi-trade subcontracting',['Construction','Property services'],'','Qualifying','Professional referral',-8,3,'Scope potential trade coverage','Potential subcontractor relationship. Review capability fit and service coverage.'],
  ['PA','Mold assessment and remediation',['Mold assessment','Mold remediation'],'Mold Bros','New','Direct relationship',-2,-1,'Call to confirm assessment details','Initial inquiry concerns suspected mold. Confirm the scope before scheduling a visit.'],
  ['Pine Harbor Management','Basement drainage review',['Basement waterproofing','French drains'],'Basement Bros','Estimate','BNI',-14,2,'Send drainage options','Illustrative property management relationship.'],
  ['Alder Cove Properties','Dry-out and flooring recovery',['Water mitigation / restoration','Flooring'],'Resto Bros','In progress','Existing customer',-16,4,'Review drying progress','Illustrative follow-up after mitigation.'],
  ['Harbor Mill Partners','Attic insulation upgrade',['Insulation'],'Insulation Bros','Qualifying','TBD Connections',-6,5,'Confirm attic access','Illustrative building-envelope inquiry.'],
  ['Pine Harbor Management','Seasonal gutter replacement',['Gutters'],'Seamless Gutter Solutions','Completed','BNI',-25,null,'','Illustrative project is complete.'],
  ['Northline Property Group','Foundation drainage and sump',['Sump pumps','Foundation repair'],'Basement Bros','New','BNI',-4,6,'Request project photos','Illustrative intake.'],
  ['Alder Cove Properties','Entry trim and repairs',['Handyman / small repairs'],'Bell Property Services','Scheduled','Existing customer',-9,5,'Confirm access arrangements','Illustrative repeat request.'],
  ['Baraldi Construction','Site preparation and trenching',['Excavation','French drains'],'G&G Excavation','Estimate','Partner / contractor',-12,8,'Review trenching scope','Illustrative opportunity from an existing relationship.'],
  ['Cedar Reach Association','Below-grade water management',['B-Dry systems'],'B-Dry','Qualifying','TBD Connections',-7,9,'Arrange a walkthrough','Illustrative association inquiry.'],
  ['Northline Property Group','Common-area refresh',['Renovation','Flooring'],'G&G Construction','In progress','BNI',-22,null,'','Illustrative renovation in progress.'],
  ['Shore Pine Services','Siding condition review',['Siding'],'','New','Other',-1,null,'','Illustrative intake awaiting routing.'],
  ['Harbor Mill Partners','Water loss remediation',['Water mitigation / restoration'],'Resto Bros','Completed','TBD Connections',-30,null,'','Illustrative completed job.'],
  ['Cedar Reach Association','Dryer vent and trim repairs',['Property services'],'Bell Property Services','Completed','Direct relationship',-35,null,'','Illustrative completed job.']
];
const seedOpportunities = seed.map(([customer,title,service,company,stage,source,created,follow,next,initialNote],i) => ({
  id:'IB-' + (116 - i), customer,title,services:service,company,stage,source,created:offsetDay(created),
  followUp:follow === null ? '' : offsetDay(follow),nextAction:next,
  notes:[{text:initialNote,date:offsetDay(created)}],contact:'',phone:'',email:'',address:'',
  estimateDate:'',scheduledDate:'',completionDate:'',estimatedValue:'',finalValue:''
}));
