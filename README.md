
# Netflix-Clone

It is a Netflix Clone project created with Angular and compatible with mobile, tablet and PC.

The data coming from TMDB Api is displayed in the project with the help of Angular Material and Tailwind CSS. Multi-language support is provided with the ngx-translate package, and state management is provided with ngrx.

> [!NOTE]
> It is a clone project made to improve myself. Payment methods were not used when becoming a member.


## Technologies

1. Angular
2. Angular Material
3. Tailwind CSS
4. Json-Server
5. TMDB Api
6. Ngx-Translate
7. NgRx

##  Installing the Module

Angular Project runs on localhost:4200 port. To make it work:

```shell
ng s
```
Json-Server runs on localhost:3000 port. To make it work:

```shell
npx json-server --watch core/db.json
```

> [!IMPORTANT]
> Make sure you show the correct db.json path in the terminal.

## API Usage (TMDB Api)

https://developer.themoviedb.org/reference/intro/getting-started


| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------- |
| Api Key | `string` | 0********9 |
| Base URL | `string` | https://api.themoviedb.org/3 |


> [!IMPORTANT]
> Secret Key is required to use TMDB Api.


## Json Server

    {
      "users": [
        {
            "username": "Anıl Yılmaz",
            "email": "anilyilmaz108@gmail.com",
            "password": "123123",
            "privacy": true,
            "id": 1
        },
      ],
      "mylist": [
        {
            "username": "Anıl",
            "icon": "https://picsum.photos/seed/b/150/150",
            "userId": "1",
            "id": 1
        },
      ],
      "favourites": []
    }
  


## Interfaces

### Get Started

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/1.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/2.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/3.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/4.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/5.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/6.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>

---

### Login-Register

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/7.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/8.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>

---

### Profile

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/9.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/10.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>

---

### Home - Tv Shows - Trending - Upcoming

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/11.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/12.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/13.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/14.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/15.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/16.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/17.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/19.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>

---

### Search

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/18.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>

---

### Not Found

<p float="left">
  <img src="https://github.com/anilyilmaz108/Netflix-Clone/blob/main/github_images/20.png" height="250" width="400" />
  &nbsp;&nbsp;&nbsp;
</p>


## Feedback

If you have any feedback, please contact us at anilyilmaz108@gmail.com.




