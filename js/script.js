let SelectTab = 'all-btn';
const SelectedTabActive = ["bg-[#3B82F6]", "text-white"];
const SelectedTabInActive = ["bg-white", "text-[#64748B]","text-black"];

const noJob = document.getElementById('no-job');

// card id

const mainContainer = document.getElementById('all-job-container');
const filterInterview = document.getElementById('filter-Interview');
const filterrejected = document.getElementById('filter-rejected');

function buttonStyle(id){
    SelectTab = id;
    const tabs = ['all-btn','interview-btn','rejected-btn'];
    
    for(const tab of tabs){
        const tabName = document.getElementById(tab);
        if(tab === id){
            tabName.classList.remove(...SelectedTabInActive);
            tabName.classList.add(...SelectedTabActive);
        }else{
            tabName.classList.remove(...SelectedTabActive);
            tabName.classList.add(...SelectedTabInActive);
        }
    }

    const Alljobs = [mainContainer , filterInterview, filterrejected];
    for(const jobSection of Alljobs){
        jobSection.classList.add('hidden');
    }

    noJob.classList.add('hidden');

    if(id === 'all-btn'){
        mainContainer.classList.remove('hidden');
        if(mainContainer.children.length < 1){
            noJob.classList.remove('hidden');
        }
    }
    else if(id === 'interview-btn'){
        filterInterview.classList.remove('hidden');
        if(filterInterview.children.length < 1){
            noJob.classList.remove('hidden');
        }
    }
    else{
        filterrejected.classList.remove('hidden');
        if(filterrejected.children.length < 1){
            noJob.classList.remove('hidden');
        }
    }
    updateStatus();
}

// status container 

const total = document.getElementById('total-count');
const interview = document.getElementById('interview-count');
const rejected = document.getElementById('rejected-count');
const jobAvailable = document.getElementById('jobAvailable');

total.innerText = mainContainer.children.length;



buttonStyle(SelectTab);

document.addEventListener('click',function(event){

    const clickElement = event.target;

    const card = clickElement.closest('.card');
    if(!card){return};


    const parentSection = card.parentNode;

    const status = card.querySelector('.status-btn');

    if(clickElement.classList.contains('interview-btn') ){
        status.innerText = 'Interviewed';
        status.classList.remove('bg-[#EEF4FF]','border-red-500', 'text-red-500');
        status.classList.add('border-2', 'border-green-500', 'text-[#10B981]');
        filterInterview.appendChild(card);
    }


    if(clickElement.classList.contains('rejected-btn')){
        status.innerText = 'rejected';
        status.classList.remove('bg-[#EEF4FF]');
        status.classList.add('border-2', 'border-red-500', 'text-red-500');
        filterrejected.appendChild(card);
    }


    if(clickElement.classList.contains('delete-btn')){
        parentSection.removeChild(card);
    }
    updateStatus();
})

function updateStatus(){

    const counts = {
        "all-btn": mainContainer.children.length,
        'interview-btn': filterInterview.children.length,
        'rejected-btn': filterrejected.children.length
    }

    total.innerText = counts["all-btn"];
    interview.innerText = counts["interview-btn"];
    rejected.innerText = counts["rejected-btn"];

    jobAvailable.innerText = counts[SelectTab];

    if(counts[SelectTab] < 1){
        noJob.classList.remove('hidden');
    }
    else{
        noJob.classList.add('hidden');
    }
}
updateStatus();