import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configurations = {
    cofigurationHeader:{
        title:'My First templatised Angular Site',
        body:'Here I have tried using html template and converted to Angular using its features.',
        buttonLink:'/',
        buttonText:'Start now'
    },
    about:{
      title:"About Shani",
      body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      html:"HTML & CSS3"
    },
    blog: {
      title:'Tech Blog',
      discription:'Know angular design concepts.',
      posts:[
        {id: 1,img:'../assets/images/gallery-images/gallery-image-1.jpg', timedelay:'0.4s', title:'Article 1',description:'Some description about the blog...', author:'Shaan', date:'01-02-1991', button:'See More', },
        {id: 2,img:'../assets/images/gallery-images/gallery-image-2.jpg', timedelay:'0.6s', title:'Article 2',description:'Some description about the blog...', author:'Shani', date:'08-07-1995', button:'See More', },
        {id: 3,img:'../assets/images/gallery-images/gallery-image-3.jpg', timedelay:'0.8s', title:'Article 3',description:'Some description about the blog...', author:'Bhagat', date:'05-12-2019', button:'See More', },
        {id: 4,img:'../assets/images/gallery-images/gallery-image-4.jpg', timedelay:'0.4s', title:'Article 4',description:'Some description about the blog...', author:'Shaan', date:'01-02-1991', button:'See More', },
        {id: 5,img:'../assets/images/gallery-images/gallery-image-5.jpg', timedelay:'0.6s', title:'Article 5',description:'Some description about the blog...', author:'Shani', date:'08-07-1995', button:'See More', },
        {id: 6,img:'../assets/images/gallery-images/gallery-image-6.jpg', timedelay:'0.8s', title:'Article 6',description:'Some description about the blog...', author:'Bhagat', date:'05-12-2019', button:'See More', },
        {id: 7,img:'../assets/images/gallery-images/gallery-image-2.jpg', timedelay:'0.4s', title:'Article 7',description:'Some description about the blog...', author:'Shani', date:'08-07-1995', button:'See More', },
        {id: 8,img:'../assets/images/gallery-images/gallery-image-6.jpg', timedelay:'0.6s', title:'Article 8',description:'Some description about the blog...', author:'Shani', date:'08-07-1995', button:'See More', },
        {id: 9,img:'../assets/images/gallery-images/gallery-image-5.jpg', timedelay:'0.8s', title:'Article 9',description:'Some description about the blog...', author:'Shani', date:'08-07-1995', button:'See More', }

      ]
    }
  }

  constructor() { }

  getConfig(){
    return this.configurations;
  }

}
