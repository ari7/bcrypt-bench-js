
/**
 * Setup:
 * 
 *     yarn install bcryptjs
 * 
 * Usage:
 * 
 *     node
 *     $ .load play.js
 */

const bcrypt = require('bcryptjs')

for (let i = 0; i < 15; i++) {
  console.time('crypt')

  let salt = bcrypt.genSaltSync(15)
  let hash = bcrypt.hashSync("B4c0/\/", salt)

  console.log('hash:', hash)

  console.timeEnd('crypt')
}
