import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			projects: [
				{
					imageUrl: "/assets/growint.png",
					description: "Grow Internatinal website - developed a new website from scratch that boosted visitor numbers by 56.69% compared to the previous year, with a 16.46% increase in mobile traffic",
					link: "https://www.growinternational.eu/",
				},
				{
					imageUrl: "/assets/viva-cruises.png",
					description: "Viva Cruises - built the frontend side of the website working with a coworker for an international river cruise operator. This is an ambitious project due to it is developed only by using vanilla JavaScript",
					link: "https://www.viva-cruises.com/en-us",
				},
				{
					imageUrl: "/assets/orbico.png",
					description: "Orbico - developed a website from scratch for a leading European distributor of many well-known brands",
					link: "https://lp.orbico.bg/",
				},
				{
					imageUrl: "/assets/expense-tracker.png",
					description: "Expense tracker - developed using Vue.js and implemented framework for an app",
					link: "https://expense-tracker-vue-app.netlify.app/",
				},
				{
					imageUrl: "/assets/letmed.png",
					description: "LetMed - developed a responsive and visually appealing company website for LetMed from scratch, implementing custom features and functionality to improve user experience",
					link: "https://asya404.github.io/LetMed/pages/home/index.html",
				},
				{
					imageUrl: "/assets/find-a-therapist.png",
					description: "Find a Therapist - crafted with Vue.js and Firebase, my app showcases a list of therapists. Users can easily filter and select a therapist, sending them direct message requests. Coaches can register/login to view and manage incoming requests, facilitating smooth communication between users and coaches",
					link: "https://find-a-therapist.netlify.app",
				},
			],
		};
	},
	getters: {
		getProjects(state) {
			return state.projects;
		},
	},
});

export default store;
