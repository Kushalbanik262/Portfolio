import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'BookMyMovie - A movie ticket booking application',
      desc: "This is movie ticket booking application developed for Specifiec Movie Booking.",
      githurl: 'https://github.com/prithwish-samanta/movie-booking-app/tree/MongoSchema',
      imgUrl: 'assets/images/proj1-movie.JPG',
      tech: 'FRONTEND:  Angular Js,Bootstrap,Angular Material UI,Redux state management system-NGRX . BACKEND:  Spring Boot,Spring Security, Spring MongoJpa . Microservice : Spring Cloud, Resilence 4J, Eureka Server,Zipkin, Sluth . Monitoring: Prometheus, Logstash, Elasticsearch, Grafana, Kibana . Messaging : Kafka',
      url:"",
      recognition:{
        img:"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
        words:"This is one of the best Project I have seen in my career",
        title:"Suresh Kumar",
        source:"IIHT Trainer with 25 years teaching Experience"
      }
    },

    {
      id: 2,
      title:"InstaSmart - An Instamart Ecommerce Platform",
      desc: "This is an Instamart Platform with Ecommerce Related features",
      githurl:"https://github.com/Kushalbanik262/GO-PRO-Angular-Phase2-Assesment-INSTA-SMART-Angular-",
      imgUrl:'assets/images/Instamart.PNG',
      tech:"This is an FRONTEND application Techstack: Angular Js, Bootstrap, Angular Material UI, Redux - NGRX ",
      url:"https://kushalbanik262.github.io/Instasmart/",
      recognition:{
        img:"https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
        words:"Kushal has used the cutting edge technologies and best practices while developing the application",
        title:"Muskan Gulrajini",
        source:"Freelancer, IIHT trainer,Mumbai Metropoliton Area"
      }

    }
    
  ]



  about2 = `Hello, I'm a Full Stack Software Engineer with a passion for building robust and efficient applications . 
  With a strong foundation in Data Structures and Algorithms, I excel at solving complex problems and implementing scalable solutions . 
  On the frontend, I specialize in Angular, JavaScript, and jQuery, utilizing these technologies to create intuitive and user-friendly interfaces . 
  In the backend realm, I have expertise in Java, enabling me to design and develop efficient server-side solutions . 
  Additionally, I am well-versed in AWS, leveraging its cloud services to deploy and manage applications with ease . 
  My diverse skill set and dedication to delivering high-quality software make me an invaluable asset to any development team . 
  I'm excited to tackle new challenges and contribute to innovative projects`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1WEM4oqVWmRgW-PKnAwLu2MLqZysg2fdJ/view?usp=drive_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'CSS, Jquery, html, Bootstrap',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Spring Boot,Spring Cloud,Spring security,Spring Data JPA',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Javascript',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'DBMS, SQL,Mysql',
      'progress': '81%'
    },
    {
      'id': '5',
      'skill': 'Angular Js',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Microservice Architecture',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'MongoDb, Nosql',
      'progress': '65%'
    },
    {
      'id': '8',
      'skill': 'Data structure and Algorithms',
      'progress': '70%'
    },
    {
      'id': '9',
      'skill': 'Low level System design',
      'progress': '75%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Electronics And Communication Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 5,
      company: 'Cognizant',
      location: 'Kolkata',
      timeline: 'September 2022 to current',
      role: 'Programmer Analyst',
      work: 'Full stack Engineer with life science vertical. Responsible for handling the UI in Angular and Managing the api calls in backend spring boot, frontend angular with AWS cloud deployment. Accredated in FSE0 and FES1 in a year'

    },
    {
      id: 4,
      company: 'Cognizant',
      location: 'Kolkata',
      timeline: 'March 2022 to August 2022',
      role: 'Full stack Software Engineer Intern',
      work: 'Trained as a full stack engineer. Learned Spring stack as backend stack, Angular, Javascript as frontEnd Stack with AWS services for cloud platform. With a Full stack Project of Insurance Service management'

    },
    {
      id: 3,
      company: 'WebsoftIOT',
      location: 'Kolkata,USA',
      timeline: 'November 2020 to March 2021',
      role: 'Junior IOT Software Developer Intern',
      work: `Technologies : Flask · Python · Internet of Things (IoT) · Systems Design .
      Worked in flask backend with system integration skills for developing a platform backend pipeline for a IOT platform,App and IOT Devices`
    },
    {
      id: 1,
      company: 'websofttechs.com',
      location: 'Kolkata',
      timeline: 'June 2020 - Jul 2020',
      role: 'Software Engineer Intern for developing POC level application for a foreign client',
      work: `Technologies : App · Web Applications · REST APIs · Representational State Transfer (REST) · C++ MFC Framework .

  Project  : Worked on Developing the Desktop application used for banking authentication and easy money transfer.`
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Ideathon 5 Winner',
      description: 'Won Ideaton 5',
      img: 'assets/images/Ideathon5.JPG',
      url: 'https://bengalchamber.com/techincubation/portfolio.html'
    },
    {
      id:2,
      title: 'Incubatee at Bengal Chamber of Commerce & Industry',
      description: '',
      img: 'assets/images/inc.jpg',
      url: ''
    },
    {
      id:3,
      title: 'Got into main Stream media for Project COVID-AI',
      description: '',
      img: 'assets/images/news.JPG',
      url: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fbengali.abplive.com%2Fnews%2Fcovid-infection-will-be-detected-after-x-ray-plate-upload-a-software-developed-by-jadavpur-students-821211%3Ffbclid%3DIwAR1hBHVlmv8ZwMwkZ5HOAkDLt-M6StaY41XgpFG5KSnQahSqa_rD_uDEX5I&h=AT33ca3HtgtjrKVq0zhTZati1Z9KGtT9OyYBbRVFMLiRDJUj6B4s5jXbV3Q05zyTK0hLkDafwRFD7ax2LmpBYDBDp-ao0M2t8qGgCjbYiZkJgB6CCqhLkJhQ8YpExdmAQTvw&__tn__=-UK-R&c[0]=AT0I92ARetFo4rZg84Bi9-glB9VDCRSThIDcNE0P27vsUVpYWeZlKyBncK262eZYZ4q4tgyMGrH3Ah2FjpqkETZEWJPggXAdt4yDI6YPXS9-UkVANPHauTC13kvNx04NjXF4CcDeRc4AOXeAaY0nNT_ztQK13OWl3NSUHn5_ZUCBkRtiLuA'
    }
    
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
