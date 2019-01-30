// const path = require('path');

// const express = require('express');

// const rootDir = request('../util/path');

// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

// module.exports = router;


// -------------------Above code is not working but below is working -------both are same code ???????

const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
