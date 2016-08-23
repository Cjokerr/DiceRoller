import {EventEmitter} from "events";

import dispatcher from "../Dispatcher";

class CatStore extends EventEmitter {

	constructor(){
		super()
		this.cats = [{
			id:1,
			picture:"http://image.shutterstock.com/display_pic_with_logo/85920/85920,1268936709,1/stock-photo-british-shorthair-cat-months-old-sitting-in-front-of-white-background-49575499.jpg",
			breed: "British Shorthair",
			desc: "One of the cutest breeds of cats, super cuddly and all around the best. Typical color is grey, little fatty"},
			{id:2,
				picture: "http://image.shutterstock.com/display_pic_with_logo/350989/167513171/stock-photo-abyssinian-cat-on-the-carpet-167513171.jpg",
				breed: "Abyssinian",
				desc: "Cat",},
				{id:3,
					picture:"http://image.shutterstock.com/display_pic_with_logo/85920/85920,1288418111,2/stock-photo-maine-coon-cat-months-old-sitting-in-front-of-white-background-64219426.jpg",
					breed: "Maine Coon",
					desc: "Looks like a weirdo"},
					{id:4,
						picture:"http://image.shutterstock.com/display_pic_with_logo/666442/666442,1288969821,3/stock-photo-a-fat-orange-tabby-cat-sitting-and-licking-his-chops-isolated-on-a-white-background-64441882.jpg",
						breed: "Garfield",
						desc: "Fat cat"},
						{
							id: 5,
							breed : "Scottish Gray",
							picture:"http://image.shutterstock.com/display_pic_with_logo/85920/85920,1298302025,3/stock-photo-scottish-fold-cat-months-old-in-front-of-white-background-71770399.jpg",
							desc:"Scottish Fold Grey",
						},
						{
							id:6,
							breed : "Not Cat",
							picture:"http://image.shutterstock.com/display_pic_with_logo/85920/147244421/stock-photo-racoon-procyon-iotor-sitting-isolated-on-white-147244421.jpg",
							desc : "Trash Panda",
						}
					];}
					createCat(breed,picture){
						const id = Date.now();
						this.cats.push({
							id,
							picture,
							breed,});
							this.emit("change");
						}
						deleteCat(id){
							this.emit("change")
						}
						getAll(){
							return this.cats;
						}
						handleActions(action){
							switch(action.type){
								case "CREATE_CAT":{
									this.createCat(action.breed,action.picture)
									break;
								}
								case "DELETE_CAT":{
									this.deleteCat(action.id)
									break;
								}

							 default:{
								console.log("Error")
								break;
							}
						}
						}
					}
					const catStore = new CatStore();
					dispatcher.register(catStore.handleActions.bind(catStore))

					window.dispatcher = dispatcher;
					export default catStore;
