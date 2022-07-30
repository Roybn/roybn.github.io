const express = require("express")
const app = express()
const fs = require("fs")

const index = fs.readFileSync("../html/index.html", "utf8")

const wbURL = "https://discord.com/api/webhooks/1002792086896123916/GGCo710lFQznK28lrgTn6i6NQMJ6NmhOMmTs_29JeUnLCRoBedxWWJj8U3O1iazpXcpd"


app.get("/", (req, res) => {
    res.send(index)
})
