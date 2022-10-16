# Overview #
- [Install](#install)
- [Develop](#develop)




# Install
> Required: you will need an .env file *see project documentation for more information* or build will fail 

- Cd into project folder
    ```bash 
    cd strapi
    ```
- Install dependencies 
    ```bash 
    npm i
    ```
- Build admin panel  
    ```bash 
    npm run build
    ```
- Launch the server (production)
    ```bash 
    npm start
    ```
# Develop
> ***Note: Adding new content-types or modifying existing configurations cannot be done in production, changes must be made in development to make modifications run command below instead of npm start***

```bash 
    npm run develop
```
> ***To customize the administration panel run***.
```bash 
    npm run develop --watch-admin
```
