<!--lint disable list-item-indent-->
<!--lint disable list-item-bullet-indent-->

# web_harvest_log
local web based ui for tracking harvest weights

have a look at the [online preview](https://s-light.github.io/web_harvest_log/app/dist/spa/#/)

## installation
- install [node](https://nodejs.org/en/)
- install [yarn](https://yarnpkg.com/)
- clone repository `git clone https://github.com/s-light/web_harvest_log.git`
- change to directory `cd web_harvest_log/server`
- install dependencies `yarn`

## configuration
change `port` and `baudRate` to fit your scale and operating system:
`app_config/serial.js`
```
module.exports = {
    retryDelay: 10000,
    port: '/dev/ttyACM0',
    baudRate: 115200,
}
```

change the initial app_config database files to fit your needs:
copy or rename `app_config/index_template.js` to `app_config/index.js`
then have a look at the file and the sub folders to change to your needs.

## Usage
- start server `server/$  yarn start`
- open webbrowser at [`localhost:3030`](http://localhost:3030)
- click on the settings symbol
- click on `import app_config from files`
- this fills / adds to the database
- happy harvesting ;-)

for development and testing have a look at [setup.md](setup.md)

## ToDo
- ToDo: extend Usage information!!
- research or create image set
    - [Karl Urban Wild-Flowers](https://openclipart.org/search/?p=2&query=Karl%20Urban)
