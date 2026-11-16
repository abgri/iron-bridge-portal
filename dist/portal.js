'use strict';

const paths = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  building:'<path d="M3 21h18M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M10 21v-4h4v4M9 7h1m4 0h1m-6 4h1m4 0h1"/>',
  tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18m-12 5h2m3 0h2"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  clipboard:'<rect x="8" y="3" width="8" height="4" rx="1"/><path d="M8 5H6a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-2m-8 9 3 3 5-5"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  download:'<path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4"/>',
  arrow:'<path d="M4 12h15m-6-6 6 6-6 6"/>',
  pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6m5 9v-2a5 5 0 0 0-4-5"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  x:'<path d="m6 6 12 12M6 18 18 6"/>',
  activity:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  chart:'<path d="M3 3v18h18M7 16l4-5 4 2 5-6"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
Object.assign(paths,{
  chevron:'<path d="m9 18 6-6-6-6"/>',
  network:'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4m-6 4v-4h12v4"/>',
  link:'<path d="M10 13a4 4 0 0 0 6 0l4-4a4 4 0 0 0-6-6l-2 2m2 6a4 4 0 0 0-6 0l-4 4a4 4 0 0 0 6 6l2-2"/>',
  list:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  board:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16m6-16v16"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a20 20 0 0 0 18 0m-9 1v3"/>',
  edit:'<path d="m15 5 4 4M4 20l4-.7L20 7a1.4 1.4 0 0 0 0-2l-1-1a1.4 1.4 0 0 0-2 0L5 16z"/>',
  trash:'<path d="M3 6h18M8 6V3h8v3m3 0-1 15H6L5 6m5 4v7m4-7v7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  wallet:'<path d="M20 7H5a2 2 0 1 1 0-4h13a2 2 0 0 1 2 2v2ZM3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m1 5h-5a2 2 0 0 0 0 4h5"/>',
  inbox:'<path d="M3 13 6 5h12l3 8v6H3zm0 0h6l1.5 3h3l1.5-3h6"/>'
});
Object.assign(paths,{
  flag:'<path d="M5 21V4m0 1c4-4 10 4 15 0v10c-5 4-11-4-15 0"/>',
  bridge:'<path d="M2 18h20M2 15c5 0 5-8 10-8s5 8 10 8M6 13v5m6-11v11m6-5v5"/>'
});
const q = (selector, context = document) => context.querySelector(selector);
const all = (selector, context = document) => [...context.querySelectorAll(selector)];
const e = (value) => String(value ?? '').replace(/[&<>"']/g,(c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const isoStamp = (date) => date ? new Date(date + 'T12:00:00Z').toLocaleDateString('en-US',{month:'short',day:'numeric',timeZone:'UTC'}) : '—';
const inPlay = (item) => item.stage !== 'Completed' && item.stage !== 'Closed';
const byNewest = (a,b) => b.created.localeCompare(a.created) || Number(b.id.slice(3)) - Number(a.id.slice(3));
const initial = (name) => name.split(/\s+/).slice(0,2).map((word) => word[0]).join('').toUpperCase();
const keyFor = (name) => name.trim().toLowerCase();
const selected = (a,b) => a === b ? ' selected' : '';
const main = q('#main');
const drawer = q('#drawer');
const searchDialog = q('#search-dialog');
const pages = {overview:['Dashboard','grid'],opportunities:['Opportunities','briefcase'],relationships:['Relationships','users'],network:['Operating network','network'],providers:['Provider directory','building'],financials:['Financials','wallet']};
const storageKey = 'iron-bridge-opportunities-v2';
let saved;
try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch {}
let opportunities = Array.isArray(saved?.opportunities) ? saved.opportunities : seedOpportunities;
let directory = Array.isArray(saved?.directory) ? saved.directory : providers.map((item) => ({
  ...item,id:item.name,company:item.name,coverage:'Maine',phone:'',email:''
}));
let providerPageNumber = 1;
let nextId = Math.max(saved?.nextId || 117, ...opportunities.map((item) => Number(item.id.slice(3)) + 1));
let activePage = 'overview';
let viewMode = 'list';
let openContext;
const dashboardFilters = {company:'',service:'',stage:''};
let recentlyDeleted;
let dismissToast;
const filters = {opportunities:{query:'',stage:'',source:'',company:'',service:''},relationships:{query:''},network:{query:''},providers:{query:'',status:'',trade:''}};
const badge = (label,color='slate') => `<span class="badge ${color}"><span></span>${e(label)}</span>`;
const stageBadge = (name) => badge(name,stages.find((stage) => stage.name === name)?.color);
const providerBadge = (name) => badge(name,({Preferred:'gold',Partner:'blue',Approved:'slate',Inactive:'rose'})[name]);
const btn = (action,label,mark,kind='secondary') => `<button type="button" class="btn ${kind}" data-action="${action}">${mark ? icon(mark) : ''}${label}</button>`;
const navLink = (page,label) => `<a class="quiet-link" href="#${page}">${label}${icon('arrow')}</a>`;
const allOpportunities = (label) => `<button type="button" class="quiet-link" ${routeFilter('opportunities','query','')}>${label}${icon('arrow')}</button>`;
const toolbar = (title,subtitle,actions='') => `<div class="page-head"><div><h1>${title}</h1><p>${subtitle}</p></div>${actions ? `<div class="page-actions">${actions}</div>` : ''}</div>`;
const titleRow = (title,subtitle,action='') => `<div class="panel-head"><div><h2>${title}</h2>${subtitle ? `<p>${subtitle}</p>` : ''}</div>${action}</div>`;
const empty = (title,copy,mark='inbox') => `<div class="empty"><span class="tile-icon">${icon(mark)}</span><h3>${title}</h3><p>${copy}</p></div>`;
const oppControl = (row,name=row.title,classes='row-name') => `<button type="button" class="${classes}" data-record="opportunity" data-id="${e(row.id)}">${e(name)}</button>`;
const record = (kind,id) => `data-record="${kind}" data-id="${e(id)}"`;
const routeFilter = (page,key,value) => `data-route="${page}" data-field="${key}" data-value="${e(value)}"`;
const companyMark = (item) => `<span class="company-mark ${item.color || 'slate'}">${e(item.initials)}</span>`;
function notify(message,stored=true,undo=false) {
  const element = q('#toast');
  const parent = drawer.open ? q('#drawer-content') : document.body;
  if (element.parentElement !== parent) parent.append(element);
  element.innerHTML = `${icon(stored ? 'check' : 'activity')}<span>${e(stored ? message : message + ' This browser could not persist the change.')}</span>${undo ? '<button type="button" class="quiet-link" data-action="undo-delete">Undo</button>' : ''}`;
  element.classList.add('show');
  clearTimeout(dismissToast);
  dismissToast = setTimeout(() => { element.classList.remove('show'); recentlyDeleted = undefined; }, undo ? 9000 : 4200);
}
function persist() {
  try {
    localStorage.setItem(storageKey,JSON.stringify({opportunities,nextId,directory}));
    return true;
  } catch { return false; }
}
function relationships() {
  const groups = new Map();
  for (const item of [...opportunities].sort(byNewest)) {
    const key = keyFor(item.customer);
    if (!groups.has(key)) groups.set(key,{key,name:item.customer,items:[],contact:'',phone:'',email:''});
    const group = groups.get(key);
    group.items.push(item);
    for (const field of ['contact','phone','email']) group[field] ||= item[field];
  }
  return [...groups.values()];
}
function stat(label,value,mark,hint,pending=false) {
  return `<div class="stat"><span class="tile-icon">${icon(mark)}</span><div><span class="stat-label">${label}</span><strong${pending ? ' class="pending-value"' : ''}>${value}</strong><small>${hint}</small></div></div>`;
}
function pipeline() {
  const marks = ['link','search','clipboard','calendar','tool','flag'];
  const current = stages.filter(({name}) => name !== 'Closed');
  return `<section class="panel pipeline-panel" aria-labelledby="pipeline-title"><h2 id="pipeline-title">Opportunity pipeline</h2>
    <div class="pipeline">${current.map(({name,color},i) => {
      const count = opportunities.filter((item) => item.stage === name).length;
      return `<button type="button" class="phase ${color}" ${routeFilter('opportunities','stage',name)} aria-label="${name}, ${count} opportunities">${icon(marks[i])}<span>${name}<strong>${count}</strong></span></button>`;
    }).join(`<span class="phase-arrow">${icon('chevron')}</span>`)}</div>
  </section>`;
}
function followUps(active) {
  const due = active.filter((item) => item.followUp && item.followUp <= nextWeek).sort((a,b) => a.followUp.localeCompare(b.followUp) || byNewest(a,b));
  const rows = due.slice(0,4).map((item) => {
    const label = item.followUp < today ? 'Overdue' : item.followUp === today ? 'Today' : isoStamp(item.followUp);
    return `<button type="button" class="follow-row" ${record('opportunity',item.id)}><span class="follow-date ${item.followUp < today ? 'late' : item.followUp === today ? 'due' : ''}">${label}</span><span><strong>${e(item.nextAction || 'Review opportunity')}</strong><small>${e(item.customer)}</small></span>${icon('chevron')}</button>`;
  }).join('');
  const remaining = due.length - 4;
  return `<section class="panel">${titleRow('Follow-up desk','Due through ' + isoStamp(nextWeek),`<span class="panel-counter">${due.length} due</span>`)}<div class="follow-list">${rows || empty('You’re caught up','Dated follow-ups appear here.','calendar')}${remaining > 0 ? `<button type="button" class="quiet-link follow-more" ${routeFilter('opportunities','due','week')}>View all ${due.length} follow-ups ${icon('arrow')}</button>` : ''}</div></section>`;
}
const chartColors = ['#e8b866','#6bbada','#307fa6','#b6d5dd','#466e91','#788b9b'];
function rankedCounts(field,values) {
  return values.map((name) => ({name,count:opportunities.filter((item) =>
    field === 'service' ? item.services.includes(name) : item[field] === name).length}))
    .filter(({count}) => count).sort((a,b) => b.count - a.count || a.name.localeCompare(b.name));
}
function donut(title,center,field,counts) {
  const segments = counts.slice(0,6);
  if (counts.length > 6) segments.splice(5,1,{name:'Remaining',count:counts.slice(5).reduce((sum,row) => sum + row.count,0),grouped:true});
  const total = segments.reduce((sum,row) => sum + row.count,0);
  let start = 0;
  const colorStops = segments.map(({count},i) => {
    const end = start + count / total * 100;
    const stop = `${chartColors[i]} ${start}% ${end}%`;
    start = end;
    return stop;
  });
  const legend = segments.map(({name,count,grouped},i) => {
    const label = name === '' ? 'Unassigned' : name;
    const content = `<i style="--swatch:${chartColors[i]}"></i><span>${e(label)}</span><b>${count}</b>`;
    if (grouped) return `<div class="chart-key">${content}</div>`;
    return `<button type="button" class="chart-key" ${routeFilter('opportunities',field,name || '__unassigned')}>${content}</button>`;
  }).join('');
  return `<section class="panel chart-panel"><h2>${title}</h2>${total ? `<div class="donut-content"><div aria-hidden="true" class="donut-ring" style="--segments:${colorStops.join(', ')}"><span><strong>${total}</strong>${center}</span></div><div class="chart-legend">${legend}</div></div>` : empty('Awaiting activity','Counts will appear here.')}</section>`;
}
function serviceChart() {
  const rows = rankedCounts('service',services).slice(0,6);
  const max = rows[0]?.count || 1;
  return `<section class="panel chart-panel"><h2>Demand by service</h2>${rows.length ? `<div class="service-chart">${rows.map(({name,count}) =>
    `<button type="button" ${routeFilter('opportunities','service',name)} title="${e(name)} · ${count}" aria-label="${e(name)}, ${count} opportunities"><span class="service-column"><i style="--bar-value:${count / max * 86}%"><b>${count}</b></i></span><span class="service-caption">${e(name)}</span></button>`).join('')}</div>` : empty('Awaiting activity','Service requests will appear here.')}</section>`;
}
function trendChart() {
  const buckets = Array.from({length:6},(_,i) => {
    const start = offsetDay(-41 + i * 7);
    const end = offsetDay(-35 + i * 7);
    return {label:isoStamp(end),count:opportunities.filter((item) => item.created >= start && item.created <= end).length};
  });
  const max = Math.max(1,...buckets.map(({count}) => count));
  const total = buckets.reduce((sum,{count}) => sum + count,0);
  let running = 0;
  const points = buckets.map(({count},i) => {
    running += count;
    return [38 + i * 40,103 - (total ? running / total : 0) * 81];
  });
  return `<section class="panel chart-panel"><h2>Opportunity intake</h2><div class="trend-legend"><span><i></i>Weekly</span><span><i></i>Running total</span></div><svg class="trend-chart" viewBox="0 0 276 130" role="img" aria-label="Six weeks of opportunity intake. ${buckets.map(({label,count}) => 'Week ending ' + label + ': ' + count).join('; ')}. ${total} total.">
    ${[22,49,76,103].map((y) => `<line x1="15" y1="${y}" x2="260" y2="${y}" class="chart-gridline"/>`).join('')}
    ${buckets.map(({label,count},i) => `<rect class="trend-bar" x="${25 + i * 40}" y="${103 - count / max * 77}" width="26" height="${count / max * 77}" rx="2"><title>${label}: ${count}</title></rect><text x="${38 + i * 40}" y="120" text-anchor="middle">${label}</text>`).join('')}
    <polyline points="${points.map((point) => point.join(',')).join(' ')}"/>${points.map(([x,y]) => `<circle cx="${x}" cy="${y}" r="3"/>`).join('')}</svg></section>`;
}
function dashboardMatches(active) {
  const {stage,company,service} = dashboardFilters;
  return active.filter((row) => (!stage || row.stage === stage) &&
    (!company || (company === '__unassigned' ? !row.company : row.company === company)) &&
    (!service || row.services.includes(service))).sort((a,b) =>
    Number(b.created === today) - Number(a.created === today) ||
    (a.followUp || '9999').localeCompare(b.followUp || '9999') || byNewest(a,b));
}
function dashboardTable(active) {
  const matches = dashboardMatches(active);
  if (!matches.length) return empty('No active opportunities found','Try another company, service, or stage.');
  const value = (amount) => amount === '' || amount == null ? '<span class="pending">Pending</span>' : money(amount);
  return table(['Customer / Opportunity','Operating Company','Service Type','Stage','Est. Value','Final Value','Follow-up','<span class="sr-only">Open record</span>'],
    matches.slice(0,6).map((item) => {
      const company = companies.find(({name}) => name === item.company);
      return `<tr><td>${oppControl(item,item.customer + ' – ' + item.title)}</td><td><div class="company-cell">${company ? `<span class="company-symbol ${company.color}">${icon('building')}</span>` : ''}${e(item.company || 'Awaiting assignment')}</div></td><td>${e(item.services[0] || '—')}${item.services.length > 1 ? ` <small class="inline-count" title="${e(item.services.slice(1).join(', '))}">+${item.services.length - 1}</small>` : ''}</td><td>${stageBadge(item.stage)}</td><td>${value(item.estimatedValue)}</td><td>${value(item.finalValue)}</td><td${item.followUp && item.followUp < today ? ' class="late-text"' : ''}>${isoStamp(item.followUp)}</td><td><button class="row-more" type="button" aria-label="Open ${e(item.id)}" ${record('opportunity',item.id)}>···</button></td></tr>`;
    }));
}
function dashboard() {
  const active = opportunities.filter(inPlay);
  const unrouted = active.filter((item) => !item.company).length;
  const estimated = active.filter((item) => item.estimatedValue !== '' && item.estimatedValue != null);
  const completed = opportunities.filter((item) => item.stage === 'Completed');
  const final = completed.filter((item) => item.finalValue !== '' && item.finalValue != null);
  const displayValue = (items,field) => items.length ? money(items.reduce((sum,item) => sum + Number(item[field]),0)) : 'Pending';
  return `<h1 class="sr-only">Revenue and opportunity dashboard</h1><div class="dashboard">
    <div class="stats">
      ${stat('Active Opportunities',active.length,'briefcase',unrouted ? `${unrouted} need assignment` : 'All assigned')}
      ${stat('Estimated Pipeline',displayValue(estimated,'estimatedValue'),'layers',`${estimated.length} of ${active.length} estimates entered`,!estimated.length)}
      ${stat('Completed Job Value',displayValue(final,'finalValue'),'check',`${final.length} of ${completed.length} values entered`,!final.length)}
      ${stat('Iron Bridge Revenue','Pending','bridge','Awaiting data',true)}
      ${stat('Commission (Est.)','Pending','wallet','Awaiting data',true)}
    </div>
    ${pipeline()}
    <section class="panel dashboard-opportunities">
      <div class="dashboard-table-head"><h2>Active Opportunities</h2><div class="dashboard-table-actions">
        ${selectFilter('company','All companies',['__unassigned',...companies.map(({name}) => name)],dashboardFilters)}
        ${selectFilter('service','All services',services,dashboardFilters)}
        ${selectFilter('stage','All stages',stages.filter(({name}) => inPlay({stage:name})).map(({name}) => name),dashboardFilters)}
        ${btn('new','Add Opportunity','plus','primary')}
      </div></div>
      <div id="dashboard-results">${dashboardTable(active)}</div>
      <div class="dashboard-table-footer"><span id="dashboard-count" aria-live="polite">${dashboardMatches(active).length} active opportunities</span>${allOpportunities('View all')}</div>
    </section>
    <div class="chart-grid">
      ${donut('Opportunities by Company','Company','company',rankedCounts('company',[...companies.map(({name}) => name),'']))}
      ${serviceChart()}
      ${donut('Opportunities by Source','Referral','source',rankedCounts('source',sources))}
      ${trendChart()}
    </div>
    ${followUps(active)}
  </div>`;
}
const selectFilter = (key,label,values,state) => `<select class="select" aria-label="${label}" data-filter="${key}"><option value="">${label}</option>${values.map((value) => `<option value="${e(value)}"${selected(state[key],value)}>${e(value === '__unassigned' ? 'Awaiting assignment' : value)}</option>`).join('')}</select>`;
const searchFilter = (label,state) => `<label class="filter-search">${icon('search')}<input type="search" aria-label="${label}" placeholder="${label}…" value="${e(state.query)}" data-query></label>`;
const resetButton = `<button class="quiet-link clear-filters" type="button" data-action="reset-filters">Clear filters</button>`;
const viewToggle = () => `<div class="view-toggle" aria-label="Opportunity view"><button type="button" data-action="view-list" aria-pressed="${viewMode === 'list'}">${icon('list')} List</button><button type="button" data-action="view-board" aria-pressed="${viewMode === 'board'}">${icon('board')} Board</button></div>`;
function opportunityPage() {
  const state = filters.opportunities;
  return toolbar('Opportunities','Track each request from first conversation through completed work.',btn('new','New opportunity','plus','primary')) +
    `<section class="panel workspace-panel" aria-label="Opportunity workspace"><div class="workspace-tools"><div class="filter-bar">${searchFilter('Search opportunities',state)}${selectFilter('stage','All stages',stages.map(({name}) => name),state)}${selectFilter('company','All companies',['__unassigned',...companies.map(({name}) => name)],state)}${selectFilter('source','All sources',sources,state)}${selectFilter('service','All services',services,state)}</div>${viewToggle()}</div><div class="results-meta"><span id="result-count" aria-live="polite"></span>${resetButton}</div><div id="results"></div></section>`;
}
function opportunityMatches() {
  const {query,stage,company,source,service,due,routing} = filters.opportunities;
  const term = query.trim().toLowerCase();
  return [...opportunities].sort(byNewest).filter((item) =>
    (!term || [item.id,item.title,item.customer,item.contact,item.company,item.source,item.nextAction,...item.services].join(' ').toLowerCase().includes(term)) &&
    (!stage || item.stage === stage) && (!company || (company === '__unassigned' ? !item.company : item.company === company)) &&
    (!source || item.source === source) && (!service || item.services.includes(service)) &&
    (!due || (inPlay(item) && item.followUp && item.followUp <= nextWeek)) &&
    (!routing || (inPlay(item) && !item.company)));
}
function table(headers,rows) {
  return `<div class="table-scroll" tabindex="0" role="region" aria-label="${headers[0]} records"><table><thead><tr>${headers.map((name) => `<th scope="col">${name}</th>`).join('')}</tr></thead><tbody>${rows.join('')}</tbody></table></div>`;
}
function opportunityTable(items) {
  return table(['Opportunity / customer','Service','Operating company','Stage','Follow-up'],items.map((item) => `<tr><td><span class="row-id">${e(item.id)}</span>${oppControl(item)}<small class="subline">${e(item.customer)}</small></td><td>${e(item.services[0] || '—')}${item.services.length > 1 ? ` <small class="inline-count" title="${e(item.services.slice(1).join(', '))}">+${item.services.length - 1}</small>` : ''}</td><td>${e(item.company || 'Awaiting assignment')}</td><td>${stageBadge(item.stage)}</td><td>${item.followUp ? `<span class="${item.followUp < today && inPlay(item) ? 'late-text' : ''}">${isoStamp(item.followUp)}</span>` : '—'}</td></tr>`));
}
function board(items) {
  const columns = stages.filter(({name}) => !filters.opportunities.stage || name === filters.opportunities.stage);
  return `<div class="board" role="region" aria-label="Board by stage" tabindex="0">${columns.map(({name,color}) => {
    const rows = items.filter((item) => item.stage === name);
    return `<section class="board-column"><div class="board-head">${badge(name,color)}<span>${rows.length}</span></div>${rows.length ? rows.map((item) => `<button type="button" class="board-item" ${record('opportunity',item.id)}><span class="row-id">${e(item.id)}</span><strong>${e(item.title)}</strong><small>${e(item.customer)} · ${e(item.services[0] || 'Other')}</small><span class="board-route">${icon('network')}${e(item.company || 'Awaiting assignment')}</span></button>`).join('') : '<p class="board-empty">No opportunities</p>'}</section>`;
  }).join('')}</div>`;
}
const providerStatuses = ['Preferred','Partner','Approved','Inactive'];
const distinct = (values) => [...new Set(values.filter(Boolean))].sort((a,b) => a.localeCompare(b));
function providerPage() {
  const state = filters.providers;
  const filter = (label,key,placeholder,values) => `<label class="provider-filter"><span>${label}</span>${selectFilter(key,placeholder,values,state)}</label>`;
  return `<div class="page-head provider-head"><div class="provider-heading"><span>${icon('users')}</span><div><h1>Preferred Provider Directory</h1><p>Trusted partners and service providers across our service areas.</p></div></div><div class="page-actions">${btn('new-provider','Add Provider','plus','primary')}</div></div>
    <section class="provider-workspace" aria-label="Provider directory"><div class="provider-tools">
      ${searchFilter('Search by company, contact, trade, or note',state)}
      ${filter('Trade / Service','trade','All trades',distinct(directory.flatMap((item) => item.trades)))}
      ${filter('Coverage Area','coverage','All areas',distinct(directory.map((item) => item.coverage)))}
      ${filter('Status','status','All statuses',providerStatuses)}
      <button type="button" class="btn secondary clear-filters" data-action="reset-filters">Clear</button>
    </div><div class="panel provider-table" id="results"></div><div class="provider-footer"><span id="result-count" aria-live="polite"></span><nav id="provider-pages" aria-label="Provider pages"></nav></div></section>`;
}
function providerTable(items) {
  return table(['Company','Contact','Trade / Service','Coverage Area','Phone / Email','Status','Notes','<span class="sr-only">Open profile</span>'],
    items.map((item) => `<tr>
      <td><div class="company-cell"><span class="company-symbol ${item.color}">${icon('tool')}</span><button class="row-name" type="button" ${record('provider',item.id)}>${e(item.name)}</button></div></td>
      <td>${e(item.person || '—')}</td>
      <td>${e(item.trades.slice(0,2).join(' / ') || '—')}${item.trades.length > 2 ? ` <small class="inline-count" title="${e(item.trades.slice(2).join(', '))}">+${item.trades.length - 2}</small>` : ''}</td>
      <td>${item.coverage ? `<span class="coverage">${icon('pin')}${e(item.coverage)}</span>` : '—'}</td>
      <td>${e(item.phone || '—')}${item.email ? `<small class="subline">${e(item.email)}</small>` : ''}</td>
      <td>${providerBadge(item.status)}</td>
      <td>${e(item.summary || '—')}</td>
      <td><button class="row-more" type="button" aria-label="Open ${e(item.name)} profile" ${record('provider',item.id)}>···</button></td>
    </tr>`));
}
function providerResults(items) {
  const pageSize = 6;
  const pages = Math.max(1,Math.ceil(items.length / pageSize));
  providerPageNumber = Math.min(providerPageNumber,pages);
  const first = (providerPageNumber - 1) * pageSize;
  const shown = items.slice(first,first + pageSize);
  q('#results').innerHTML = shown.length ? providerTable(shown) : empty('No providers found','Clear filters or try a different search.');
  q('#result-count').textContent = shown.length ? `Showing ${first + 1}–${first + shown.length} of ${items.length} providers` : '0 providers';
  q('.clear-filters').disabled = !Object.values(filters.providers).some(Boolean);
  const pageButton = (number,label,aria,disabled=false) => `<button type="button" data-action="provider-page" data-number="${number}" aria-label="${aria}"${providerPageNumber === number && typeof label === 'number' ? ' aria-current="page"' : ''}${disabled ? ' disabled' : ''}>${label}</button>`;
  q('#provider-pages').innerHTML = pages > 1 ? pageButton(providerPageNumber - 1,'‹','Previous page',providerPageNumber === 1) +
    Array.from({length:pages},(_,i) => pageButton(i + 1,i + 1,'Page ' + (i + 1))).join('') +
    pageButton(providerPageNumber + 1,'›','Next page',providerPageNumber === pages) : '';
}
function recordsPage(page) {
  const titles = {
    relationships:['Relationships','See who brings work to Iron Bridge and the opportunities each relationship has generated.','Search relationships'],
    network:['Operating Network','See which companies are handling work and what they can deliver.','Search companies or services']
  };
  const [title,sub,placeholder] = titles[page];
  return toolbar(title,sub) + `<section class="panel workspace-panel"><div class="workspace-tools"><div class="filter-bar">${searchFilter(placeholder,filters[page])}</div></div><div class="results-meta"><span id="result-count" aria-live="polite"></span>${resetButton}</div><div id="results"></div></section>`;
}
function relationshipTable(items) {
  return table(['Relationship','Referral channels','Services involved','Open / total','Latest opportunity'],items.map((item) => {
    const [latest] = item.items;
    const channels = [...new Set(item.items.map((row) => row.source).filter(Boolean))].join(', ');
    const trades = [...new Set(item.items.flatMap((row) => row.services))];
    return `<tr><td><div class="company-cell">${companyMark({initials:initial(item.name)})}<div><button class="row-name" type="button" ${record('relationship',item.key)}>${e(item.name)}</button><small class="subline">${e(item.contact || (item.items.some(inPlay) ? 'Active relationship' : 'Prior relationship'))}</small></div></div></td><td>${e(channels || '—')}</td><td>${e(trades.slice(0,2).join(', ') || '—')}${trades.length > 2 ? ` <small class="inline-count">+${trades.length - 2}</small>` : ''}</td><td><span class="mono">${item.items.filter(inPlay).length} / ${item.items.length}</span></td><td>${isoStamp(latest.created)}</td></tr>`;
  }));
}
function companyCards(items) {
  return `<div class="company-grid">${items.map((item) => {
    const open = opportunities.filter((row) => row.company === item.name && inPlay(row)).length;
    const tags = item.trades.slice(0,3).map((trade) => `<span class="tag">${e(trade)}</span>`).join('');
    return `<button type="button" class="company-card" ${record('company',item.name)}><span class="company-card-top">${companyMark(item)}<span class="mono muted">${open} active</span></span><strong>${e(item.name)}</strong><span class="company-meta">${e(item.summary)}</span><span class="tag-list">${tags}${item.trades.length > 3 ? `<span class="tag">+${item.trades.length - 3}</span>` : ''}</span><span class="company-card-foot">Company profile ${icon('arrow')}</span></button>`;
  }).join('')}</div>`;
}
function financials() {
  const captured = opportunities.filter((item) => item.estimatedValue !== '' || item.finalValue !== '').sort(byNewest);
  return toolbar('Financials','Review manually entered opportunity values when they’re available.') +
    `<section class="panel financial-head"><span class="tile-icon">${icon('wallet')}</span><div><h2>Opportunity values</h2><p>Estimates and final values can be captured on any opportunity. Revenue, cost, margin, and commissions are planned for a later release.</p></div>${navLink('opportunities','Open opportunities')}</section>
    <section class="panel financial-table">${titleRow('Recorded values','Amounts entered in this workspace')}${captured.length ? table(['Opportunity','Company','Estimated value','Final value'],captured.map((item) => `<tr><td>${oppControl(item)}<small class="subline">${e(item.customer)}</small></td><td>${e(item.company || 'Awaiting assignment')}</td><td>${money(item.estimatedValue)}</td><td>${money(item.finalValue)}</td></tr>`)) : empty('Awaiting data','Open an opportunity and add an estimate or final value under Financials.','wallet')}</section>`;
}
function money(value) {
  return value !== '' && Number.isFinite(Number(value)) ? new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(Number(value)) : '—';
}
function refreshResults() {
  const state = filters[activePage];
  if (!state) return;
  const target = q('#results');
  const term = state.query.trim().toLowerCase();
  let items;
  let content;
  let noun;
  if (activePage === 'opportunities') {
    items = opportunityMatches();
    content = () => viewMode === 'list' ? opportunityTable(items) : board(items);
    noun = items.length === 1 ? 'opportunity' : 'opportunities';
  } else if (activePage === 'relationships') {
    items = relationships().filter((item) => [item.name,item.contact,...item.items.flatMap((row) => [row.title,row.source,...row.services])].join(' ').toLowerCase().includes(term));
    content = () => relationshipTable(items);
    noun = items.length === 1 ? 'relationship' : 'relationships';
  } else if (activePage === 'providers') {
    items = directory.filter((item) => (!state.status || item.status === state.status) &&
      (!state.coverage || item.coverage === state.coverage) && (!state.trade || item.trades.includes(state.trade)) &&
      [item.name,item.person,item.summary,item.coverage,item.phone,item.email,...item.trades].join(' ').toLowerCase().includes(term));
    providerResults(items);
    return;
  } else {
    items = companies.filter((item) => [item.name,item.person,item.summary,...item.trades].join(' ').toLowerCase().includes(term));
    content = () => companyCards(items);
    noun = items.length === 1 ? 'company' : 'companies';
  }
  q('#result-count').textContent = `${items.length} ${noun}${state.due ? ' · due through ' + isoStamp(nextWeek) : state.routing ? ' · awaiting company assignment' : ''}`;
  q('.clear-filters').hidden = !Object.values(state).some(Boolean);
  target.innerHTML = items.length ? content() : empty('No ' + noun + ' found',Object.values(state).some(Boolean) ? 'Clear filters or try a different search.' : 'New records will appear here.');
}
function setMenu(open) {
  q('#sidebar').classList.toggle('open',open);
  q('#menu').setAttribute('aria-expanded',String(open));
}
function render() {
  const route = location.hash.slice(1);
  activePage = Object.hasOwn(pages,route) ? route : 'overview';
  const title = pages[activePage][0];
  q('#crumb').textContent = 'Revenue / Opportunity Dashboard';
  q('#crumb').hidden = activePage !== 'overview';
  document.title = 'Iron Bridge | ' + title;
  const nav = (keys) => keys.map((key) => `<a class="nav-link${key === activePage ? ' active' : ''}" ${key === activePage ? 'aria-current="page"' : ''} href="#${key}">${icon(pages[key][1])}<span>${pages[key][0]}</span>${key === 'opportunities' ? `<span class="nav-count">${opportunities.filter(inPlay).length}</span>` : ''}</a>`).join('');
  q('#nav').innerHTML = nav(['overview','opportunities','relationships','financials','network','providers']);
  main.innerHTML = activePage === 'overview' ? dashboard() : activePage === 'opportunities' ? opportunityPage() : activePage === 'financials' ? financials() : activePage === 'providers' ? providerPage() : recordsPage(activePage);
  refreshResults();
}
const field = (label,control,wide=false) => `<label class="field${wide ? ' wide' : ''}"><span>${label}</span>${control}</label>`;
const input = (name,value='',attributes='') => `<input name="${name}" value="${e(value)}" ${attributes}>`;
const select = (name,values,current,placeholder='',required=false) =>
  `<select name="${name}"${required ? ' required' : ''}>${placeholder ? `<option value="">${placeholder}</option>` : ''}${values.map((value) => `<option${selected(current,value)}>${e(value)}</option>`).join('')}</select>`;
const textarea = (name,placeholder='') => `<textarea name="${name}" rows="3" maxlength="1600" placeholder="${e(placeholder)}"></textarea>`;
const details = (entries) => `<dl class="detail-grid">${entries.map(([label,value]) => `<div><dt>${e(label)}</dt><dd>${e(value || '—')}</dd></div>`).join('')}</dl>`;
function showDrawer(title,eyebrow,content,footer='') {
  if (q('#toast').closest('#drawer-content')) document.body.append(q('#toast'));
  q('#drawer-content').innerHTML = `<div class="drawer-head"><div><span class="drawer-label">${e(eyebrow)}</span><h2 id="drawer-title">${e(title)}</h2></div><button type="button" class="icon-button" data-action="close-drawer" aria-label="Close panel">${icon('x')}</button></div><div class="drawer-body">${content}</div>${footer ? `<div class="drawer-footer">${footer}</div>` : ''}`;
  if (!drawer.open) drawer.showModal();
  q('.drawer-body',drawer).scrollTop = 0;
}
function section(title,content) {
  return `<section class="drawer-section"><h3>${title}</h3>${content}</section>`;
}
function disclosure(title,content) {
  return `<details class="disclosure"><summary>${title}<span>${icon('chevron-down')}</span></summary><div class="disclosure-inner">${content}</div></details>`;
}
function presentForm(item) {
  const existing = Boolean(item?.id);
  const row = item || {customer:'',title:'',services:[],company:'',stage:'New',source:'',nextAction:'',followUp:''};
  const choices = services.map((name) => `<label class="check-field"><input type="checkbox" name="extraServices" value="${e(name)}"${row.services.slice(1).includes(name) ? ' checked' : ''}><span>${e(name)}</span></label>`).join('');
  const customerOptions = relationships().map(({name}) => `<option value="${e(name)}"></option>`).join('');
  const intake = `<div class="form-grid">
    ${field('Customer or company',input('customer',row.customer,'list="customer-options" maxlength="100" required placeholder="e.g. David R." autofocus'))}
    <datalist id="customer-options">${customerOptions}</datalist>
    ${field('Opportunity title',input('title',row.title,'maxlength="115" placeholder="e.g. Roof replacement"'))}
    ${field('Primary service',select('service',services,row.services[0],'Select a service',true))}
    ${field('Operating company',select('company',companies.map(({name}) => name),row.company,'Awaiting assignment'))}
    ${field('Stage',select('stage',stages.map(({name}) => name),row.stage))}
    ${field('Referral source',select('source',sources,row.source,'Select a source'))}
    </div>`;
  const actions = `<div class="form-grid">
    ${field('Next action',input('nextAction',row.nextAction,'maxlength="160" placeholder="e.g. Call to schedule a roof inspection"'))}
    ${field('Follow-up date',input('followUp',row.followUp,'type="date"'))}
    ${field(existing ? 'Add a note' : 'Notes',textarea('note','Capture what was discussed or what the customer needs.'),true)}
    </div>`;
  const optional = [disclosure('Contact and project address',`<div class="form-grid">${field('Primary contact',input('contact',row.contact,'maxlength="100"'))}${field('Phone',input('phone',row.phone,'type="tel" maxlength="40"'))}${field('Email',input('email',row.email,'type="email" maxlength="160"'))}${field('Project address',input('address',row.address,'maxlength="160"'))}</div>`),
    disclosure('Additional services',`<div class="checkbox-grid">${choices}</div>`),
    disclosure('Project dates',`<div class="form-grid">${field('Estimate date',input('estimateDate',row.estimateDate,'type="date"'))}${field('Scheduled date',input('scheduledDate',row.scheduledDate,'type="date"'))}${field('Completion date',input('completionDate',row.completionDate,'type="date"'))}</div>`),
    disclosure('Financials',`<div class="form-grid">${field('Estimated value (USD)',input('estimatedValue',row.estimatedValue,'type="number" min="0" step="0.01" placeholder="Awaiting data"'))}${field('Final value (USD)',input('finalValue',row.finalValue,'type="number" min="0" step="0.01" placeholder="Awaiting data"'))}</div>`)].join('');
  openContext = {type:'form',id:row.id};
  showDrawer(existing ? 'Edit opportunity' : 'New opportunity',existing ? row.id + ' · ' + row.customer : 'Opportunity intake',
    `<form id="opportunity-form">${section('Customer and routing',intake)}${section('Next steps',actions)}${optional}</form>`,
    btn(existing ? 'cancel-edit' : 'close-drawer','Cancel') + `<button class="btn primary" form="opportunity-form" type="submit">${icon('check')}${existing ? 'Save changes' : 'Create opportunity'}</button>`);
  q('[name="customer"]',drawer).focus();
  q('#opportunity-form').addEventListener('submit',(event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (key) => String(fields.get(key) ?? '').trim();
    if (!value('customer')) {
      form.elements.customer.setCustomValidity('Enter a customer or company name.');
      form.elements.customer.reportValidity();
      form.elements.customer.addEventListener('input',() => form.elements.customer.setCustomValidity(''),{once:true});
      return;
    }
    const entry = {...row,...Object.fromEntries(['customer','title','company','stage','source','contact','phone','email','address','nextAction','followUp','estimateDate','scheduledDate','completionDate','estimatedValue','finalValue'].map((key) => [key,value(key)]))};
    entry.title ||= value('service') + ' request';
    entry.services = [...new Set([value('service'),...fields.getAll('extraServices')])];
    entry.notes = [...(row.notes || [])];
    if (value('note')) entry.notes.push({text:value('note'),date:today});
    if (existing) {
      opportunities = opportunities.map((item) => item.id === entry.id ? entry : item);
    } else {
      entry.id = 'IB-' + nextId++;
      entry.created = today;
      opportunities = [entry,...opportunities];
      filters.opportunities = {query:'',stage:'',source:'',company:'',service:''};
    }
    const stored = persist();
    if (!existing && activePage !== 'opportunities') location.hash = 'opportunities';
    else render();
    presentOpportunity(entry.id);
    notify(existing ? 'Changes saved to ' + entry.id + '.' : entry.id + ' created.',stored);
  });
}
function presentOpportunity(id) {
  const row = opportunities.find((item) => item.id === id);
  if (!row) return;
  openContext = {type:'opportunity',id};
  const flow = `<div class="detail-flow"><span><small>Relationship</small><strong>${e(row.customer)}</strong></span>${icon('arrow')}<span><small>Referral source</small><strong>${e(row.source || 'Not entered')}</strong></span>${icon('arrow')}<span><small>Operating company</small><strong>${e(row.company || 'Awaiting assignment')}</strong></span></div>`;
  const state = `<div class="detail-status">${stageBadge(row.stage)}<label class="inline-stage"><span>Change stage</span>${select('quickStage',stages.map(({name}) => name),row.stage)}</label></div>`;
  const follow = row.nextAction || row.followUp ? `<div class="follow-box">${icon('calendar')}<div><strong>${e(row.nextAction || 'Review opportunity')}</strong><span class="${row.followUp && inPlay(row) && row.followUp < today ? 'late-text' : ''}">${row.followUp ? isoStamp(row.followUp) + (row.followUp < today && inPlay(row) ? ' · overdue' : '') : 'No date set'}</span></div></div>` : '<p class="muted">Use Edit to record a next action or follow-up date.</p>';
  const noteList = [...row.notes].reverse().map((note) => `<div class="note"><span class="note-dot"></span><div><time datetime="${e(note.date)}">${isoStamp(note.date)}</time><p>${e(note.text)}</p></div></div>`).join('');
  const notes = `<form class="note-form" id="note-form">${field('New note',textarea('text','Add an update to the history.'))}<button type="submit" class="btn secondary">${icon('plus')}Add note</button></form>${noteList ? `<div class="notes">${noteList}</div>` : ''}`;
  const contact = disclosure('Contact and project',details([['Primary contact',row.contact],['Phone',row.phone],['Email',row.email],['Project address',row.address]]));
  const milestones = disclosure('Milestones and financials',details([['Created',isoStamp(row.created)],['Estimate date',isoStamp(row.estimateDate)],['Scheduled date',isoStamp(row.scheduledDate)],['Completion date',isoStamp(row.completionDate)],['Estimated value',money(row.estimatedValue)],['Final value',money(row.finalValue)]]));
  showDrawer(row.title,row.id + ' · Opportunity',
    state + flow + section('Services requested',`<div class="tag-list">${row.services.map((name) => `<span class="tag">${e(name)}</span>`).join('')}</div>`) + section('Next follow-up',follow) +
    section('Notes and updates',notes) + contact + milestones,
    btn('delete-request','Delete','trash','danger-quiet') + btn('edit','Edit opportunity','edit','primary'));
  q('[name="quickStage"]',drawer).addEventListener('change',(event) => {
    row.stage = event.target.value;
    const stored = persist();
    render();
    q('.detail-status .badge',drawer).outerHTML = stageBadge(row.stage);
    const followDate = q('.follow-box div span',drawer);
    if (followDate && row.followUp) {
      const late = inPlay(row) && row.followUp < today;
      followDate.classList.toggle('late-text',late);
      followDate.textContent = isoStamp(row.followUp) + (late ? ' · overdue' : '');
    }
    notify(row.id + ' moved to ' + row.stage.toLowerCase() + '.',stored);
  });
  q('#note-form').addEventListener('submit',(event) => {
    event.preventDefault();
    const text = event.currentTarget.elements.text.value.trim();
    if (!text) {
      event.currentTarget.elements.text.focus();
      return;
    }
    const scroll = q('.drawer-body',drawer).scrollTop;
    row.notes.push({text,date:today});
    const stored = persist();
    presentOpportunity(id);
    q('.drawer-body',drawer).scrollTop = scroll;
    q('#note-form textarea',drawer).focus({preventScroll:true});
    notify('Note added.',stored);
  });
}
function confirmDelete(id) {
  const row = opportunities.find((item) => item.id === id);
  if (!row) return;
  openContext = {type:'delete',id};
  showDrawer('Delete opportunity?',row.id + ' · Opportunity',
    `<div class="delete-box"><span class="tile-icon">${icon('trash')}</span><p><strong>${e(row.title)}</strong> and its notes will be removed from this workspace.</p></div>`,
    btn('back-detail','Keep opportunity') + btn('delete-confirm','Delete opportunity','trash','danger'));
}
function presentRelationship(id) {
  const item = relationships().find((group) => group.key === id);
  if (!item) return;
  const channels = [...new Set(item.items.map((row) => row.source).filter(Boolean))];
  const trades = [...new Set(item.items.flatMap((row) => row.services))];
  const associated = item.items.map((row) => `<div class="associated-row">${oppControl(row)}${stageBadge(row.stage)}</div>`).join('');
  openContext = {type:'relationship',id};
  showDrawer(item.name,'Relationship',details([['Primary contact',item.contact],['Phone',item.phone],['Email',item.email],['Open opportunities',String(item.items.filter(inPlay).length)]]) +
    section('Referral channels',`<div class="tag-list">${channels.length ? channels.map((name) => `<span class="tag">${e(name)}</span>`).join('') : '—'}</div>`) +
    section('Services involved',`<div class="tag-list">${trades.map((name) => `<span class="tag">${e(name)}</span>`).join('')}</div>`) +
    section('Associated opportunities',associated));
}
function presentCompany(id) {
  const item = companies.find(({name}) => name === id);
  if (!item) return;
  const assigned = opportunities.filter((row) => row.company === item.name).sort(byNewest);
  openContext = {type:'company',id};
  const body = `<div class="profile-intro">${companyMark(item)}<div><p>${e(item.summary)}</p></div></div>` +
    details([['Contact',item.person],['Coverage','Maine'],['Phone',''],['Email','']]) +
    section('Capabilities',item.trades.length ? `<div class="tag-list">${item.trades.map((trade) => `<span class="tag">${e(trade)}</span>`).join('')}</div>` : '<p class="muted">Capabilities awaiting confirmation.</p>') +
    section('Opportunity activity',assigned.length ? assigned.map((row) => `<div class="associated-row">${oppControl(row)}${stageBadge(row.stage)}</div>`).join('') : '<p class="muted">No opportunities currently assigned.</p>');
  showDrawer(item.name,'Operating network',body,
    `<button class="btn secondary" type="button" ${routeFilter('opportunities','company',item.name)}>${icon('arrow')}View assigned opportunities</button>`);
}
function presentProvider(id) {
  const item = directory.find((entry) => entry.id === id);
  if (!item) return;
  openContext = {type:'provider',id};
  const body = `<div class="profile-intro">${companyMark(item)}<div><p>${e(item.summary || 'Add notes to describe this provider’s work.')}</p>${providerBadge(item.status)}</div></div>` +
    details([['Contact',item.person],['Coverage',item.coverage],['Phone',item.phone],['Email',item.email]]) +
    section('Capabilities',item.trades.length ? `<div class="tag-list">${item.trades.map((trade) => `<span class="tag">${e(trade)}</span>`).join('')}</div>` : '<p class="muted">Capabilities awaiting confirmation.</p>');
  showDrawer(item.name,'Preferred Provider Directory',body,
    (item.company ? `<button class="btn secondary" type="button" ${routeFilter('opportunities','company',item.company)}>${icon('arrow')}View assigned opportunities</button>` : '') +
    btn('edit-provider','Edit Provider','edit','primary'));
}
function editProvider(id) {
  const existing = directory.find((item) => item.id === id);
  const item = existing || {name:'',person:'',coverage:'',status:'Approved',phone:'',email:'',summary:'',trades:[]};
  openContext = {type:'provider-form',id};
  showDrawer(existing ? 'Edit Provider' : 'Add Provider','Preferred Provider Directory',
    `<form id="provider-form"><div class="form-grid">
      ${field('Company',input('name',item.name,'maxlength="110" required autofocus'))}
      ${field('Primary contact',input('person',item.person,'maxlength="110"'))}
      ${field('Coverage area',input('coverage',item.coverage,'maxlength="100" placeholder="e.g. Central Maine"'))}
      ${field('Status',select('status',providerStatuses,item.status))}
      ${field('Phone',input('phone',item.phone,'type="tel" maxlength="45"'))}
      ${field('Email',input('email',item.email,'type="email" maxlength="160"'))}
      ${field('Trades / capabilities',input('trades',item.trades.join(', '),'maxlength="320" placeholder="Separate trades with commas"'),true)}
      ${field('Notes',`<textarea name="summary" rows="3" maxlength="600">${e(item.summary)}</textarea>`,true)}
    </div></form>`,
    btn(existing ? 'cancel-provider-edit' : 'close-drawer','Cancel') +
    `<button class="btn primary" form="provider-form" type="submit">${icon('check')}${existing ? 'Save changes' : 'Save provider'}</button>`);
  q('[name="name"]',drawer).focus();
  q('#provider-form').addEventListener('submit',(event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (key) => String(fields.get(key) || '').trim();
    const name = value('name');
    if (!name) {
      form.elements.name.setCustomValidity('Enter a company name.');
      form.elements.name.reportValidity();
      form.elements.name.addEventListener('input',() => form.elements.name.setCustomValidity(''),{once:true});
      return;
    }
    const entry = {
      ...item,id:existing?.id || crypto.randomUUID(),name,initials:initial(name),color:existing?.color || 'blue',
      trades:[...new Set(value('trades').split(',').map((trade) => trade.trim()).filter(Boolean))],
      ...Object.fromEntries(['person','coverage','status','phone','email','summary'].map((key) => [key,value(key)]))
    };
    directory = existing ? directory.map((row) => row.id === id ? entry : row) : [entry,...directory];
    if (!existing) {
      filters.providers = {query:''};
      providerPageNumber = 1;
    } else {
      for (const [key,valid] of [['trade',directory.flatMap((row) => row.trades)],['coverage',directory.map((row) => row.coverage)]]) {
        if (!valid.includes(filters.providers[key])) filters.providers[key] = '';
      }
    }
    render();
    presentProvider(entry.id);
    notify(existing ? 'Provider updated.' : 'Provider added.',persist());
  });
}
function openRecord(type,id) {
  if (searchDialog.open) searchDialog.close();
  if (type === 'opportunity') presentOpportunity(id);
  if (type === 'relationship') presentRelationship(id);
  if (type === 'company') presentCompany(id);
  if (type === 'provider') presentProvider(id);
}
function globalSearch() {
  if (searchDialog.open) {
    q('#global-query').focus();
    return;
  }
  q('#search-content').innerHTML = `<div class="search-head"><h2 id="search-title">Search workspace</h2><button type="button" class="icon-button" aria-label="Close search" data-action="close-search">${icon('x')}</button></div><div class="global-field"><label class="filter-search">${icon('search')}<input id="global-query" type="search" aria-label="Search names and records" placeholder="Find opportunities, relationships or providers…" autofocus></label></div><div id="search-results" aria-live="polite"><p>Search by name, opportunity ID, or service.</p></div>`;
  searchDialog.showModal();
  const input = q('#global-query');
  const items = [
    ...[...opportunities].sort(byNewest).map((item) => ['opportunity',item.id,item.title,item.id + ' · ' + item.customer,[item.company,...item.services].join(' ')]),
    ...relationships().map((item) => ['relationship',item.key,item.name,'Relationship','']),
    ...directory.map((item) => ['provider',item.id,item.name,'Provider',[item.person,item.coverage,...item.trades].join(' ')]),
    ...companies.map((item) => ['company',item.name,item.name,'Operating company',[item.person,...item.trades].join(' ')])
  ];
  const refresh = () => {
    const term = input.value.trim().toLowerCase();
    const matches = term ? items.filter((entry) => entry.slice(2).join(' ').toLowerCase().includes(term)).slice(0,10) : [];
    q('#search-results').innerHTML = matches.length ? matches.map(([kind,id,title,sub]) => `<button class="search-result" type="button" ${record(kind,id)}><span><strong>${e(title)}</strong><small>${e(sub)}</small></span>${icon('chevron')}</button>`).join('') : `<p>${term ? 'No matching records.' : 'Search by name, opportunity ID, or service.'}</p>`;
  };
  input.addEventListener('input',refresh);
  input.addEventListener('keydown',(event) => {
    const first = q('.search-result');
    if (event.key === 'Enter' && first) first.click();
    if (event.key === 'ArrowDown' && first) { event.preventDefault(); first.focus(); }
  });
  input.focus();
}
function changePage(page,key,value) {
  if (drawer.open) drawer.close();
  if (key && filters[page]) filters[page] = {query:'',[key]:value};
  if (page === activePage) {
    render();
    main.focus({preventScroll:true});
  } else {
    location.hash = page;
  }
}
function onClick(event) {
  const target = event.target;
  if (q('#sidebar').classList.contains('open') && (!target.closest('#sidebar, #menu') || target.closest('#sidebar a'))) setMenu(false);
  const row = target.closest('[data-record]');
  if (row) {
    openRecord(row.dataset.record,row.dataset.id);
    return;
  }
  const route = target.closest('[data-route]');
  if (route) {
    changePage(route.dataset.route,route.dataset.field,route.dataset.value);
    return;
  }
  const button = target.closest('[data-action]');
  if (!button) return;
  switch (button.dataset.action) {
    case 'new': presentForm(); break;
    case 'new-provider': editProvider(); break;
    case 'edit-provider': editProvider(openContext.id); break;
    case 'cancel-provider-edit': presentProvider(openContext.id); break;
    case 'provider-page':
      providerPageNumber = Number(button.dataset.number);
      refreshResults();
      q('#provider-pages [aria-current="page"]')?.focus();
      break;
    case 'close-drawer': drawer.close(); break;
    case 'close-search': searchDialog.close(); break;
    case 'edit': presentForm(opportunities.find((item) => item.id === openContext.id)); break;
    case 'cancel-edit':
    case 'back-detail': presentOpportunity(openContext.id); break;
    case 'delete-request': confirmDelete(openContext.id); break;
    case 'delete-confirm': {
      const {id} = openContext;
      recentlyDeleted = opportunities.find((item) => item.id === id);
      opportunities = opportunities.filter((item) => item.id !== id);
      drawer.close();
      render();
      notify(id + ' deleted.',persist(),true);
      break;
    }
    case 'undo-delete': {
      if (!recentlyDeleted) break;
      const row = recentlyDeleted;
      recentlyDeleted = undefined;
      opportunities = [...opportunities,row];
      render();
      notify(row.id + ' restored.',persist());
      break;
    }
    case 'reset-filters': providerPageNumber = 1; filters[activePage] = {query:''}; render(); q('[data-query]').focus(); break;
    case 'view-list':
    case 'view-board': {
      viewMode = button.dataset.action.slice(5);
      render();
      q(`[data-action="view-${viewMode}"]`).focus();
      break;
    }
  }
}
all('[data-icon]').forEach((element) => { element.innerHTML = icon(element.dataset.icon); });
q('#shortcut').textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K';
q('#search').addEventListener('click',globalSearch);
q('#menu').addEventListener('click',() => setMenu(!q('#sidebar').classList.contains('open')));
document.addEventListener('click',onClick);
main.addEventListener('input',(event) => {
  if (!event.target.matches('[data-query]')) return;
  if (activePage === 'providers') providerPageNumber = 1;
  filters[activePage].query = event.target.value;
  refreshResults();
});
main.addEventListener('change',(event) => {
  if (!event.target.matches('[data-filter]')) return;
  if (activePage === 'overview') {
    dashboardFilters[event.target.dataset.filter] = event.target.value;
    const active = opportunities.filter(inPlay);
    q('#dashboard-results').innerHTML = dashboardTable(active);
    q('#dashboard-count').textContent = dashboardMatches(active).length + ' active opportunities';
    return;
  }
  if (activePage === 'providers') providerPageNumber = 1;
  filters[activePage][event.target.dataset.filter] = event.target.value;
  refreshResults();
});
drawer.addEventListener('close',() => {
  const toast = q('#toast');
  if (toast.closest('#drawer-content')) document.body.append(toast);
});
for (const element of [drawer,searchDialog]) {
  element.addEventListener('click',(event) => { if (event.target === element) element.close(); });
}
document.addEventListener('keydown',(event) => {
  if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    globalSearch();
  }
  if (event.key === 'Escape' && !drawer.open && !searchDialog.open) setMenu(false);
});
window.addEventListener('hashchange',() => {
  if (location.hash === '#main') return;
  render();
  if (!drawer.open) main.focus({preventScroll:true});
  window.scrollTo(0,0);
});
render();
