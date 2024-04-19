import { getFilms } from "./data/dataFetch";
import Film, {AttributeFilm} from "./components/Film/Film";
import stylesIndex from './IndexAbuelo.css'
import { getPeople } from "./data/getEpisode";


class AppContainer extends HTMLElement {
	FavoriteFilms: any[] = []

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

	}

	async connectedCallback() {
		const dataFilms = await getFilms();
		this.render(dataFilms);
	}

	render(dataFilms: any) {
		if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <style>
                ${stylesIndex}
                </style>`}

			const FilmsSection =  this.ownerDocument.createElement("section");

			const FavoriteFilmsSection =  this.ownerDocument.createElement("section");

			dataFilms.forEach((dataFilm: any) => {
				const cardFilm = this.ownerDocument.createElement('film-card') as Film;
				cardFilm.setAttribute(AttributeFilm.tittle, dataFilm.title);
				cardFilm.setAttribute(AttributeFilm.img, dataFilm.image);
				cardFilm.setAttribute(AttributeFilm.originaltitle, dataFilm.original_title)
				cardFilm.setAttribute(AttributeFilm.releasedate, dataFilm.release_date)
				cardFilm.setAttribute(AttributeFilm.description, dataFilm.description)
				cardFilm.setAttribute(AttributeFilm.director, dataFilm.director)
				cardFilm.setAttribute(AttributeFilm.people, dataFilm.people[0])
				console.log(dataFilm.people)

				const button = this.ownerDocument.createElement("button");
            	button.textContent= 'AddFavorite'
				button.addEventListener('click', () => {
					// Agregar el nuevo elemento Film a FavoriteFilms
					FavoriteFilmsSection.appendChild(cardFilm);
				});

				FilmsSection.appendChild(button)
				FilmsSection.appendChild(cardFilm)
			});

			this.shadowRoot?.appendChild(FilmsSection)

			const FavoriteTitle = this.ownerDocument.createElement('h2')
			FavoriteTitle.textContent= 'FAVORITES'
			this.shadowRoot?.appendChild(FavoriteTitle)

			this.shadowRoot?.appendChild(FavoriteFilmsSection)


			
		
	}

}

customElements.define('app-container', AppContainer);