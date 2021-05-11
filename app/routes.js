const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//************* routes for add-product-v4 ************* starts

router.post('/add-product-v4/is-this-case-related-to-covid', function (req, res) {
  const iscovid = req.session.data['covid-related']

  if (iscovid == null) {
    res.redirect('/add-product-v4/is-this-case-related-to-covid-error' )
  } else {
    res.redirect('/add-product-v4/reason-for-creating-case' )
  }
})
router.post('/add-product-v4/is-this-case-related-to-covid-error', function (req, res) {
  const iscoviderror = req.session.data['covid-related']

  if (iscoviderror != null) {
    res.redirect('/add-product-v4/reason-for-creating-case' )
  }
})

//********************* start reason-for-creating-case
router.post('/add-product-v4/reason-for-creating-case', function (req, res) {
  const casereason = req.session.data['reason']

  if (casereason == null) {
    res.redirect('/add-product-v4/reason-for-creating-case-error' )
  } else if (casereason == 'issafeoption') {
      res.redirect('/add-product-v4/is-case-counterfeit' )
  } else {
    res.redirect('/add-product-v4/why-is-the-product-of-concern' )
  }
})
router.post('/add-product-v4/reason-for-creating-case-error', function (req, res) {
  const casereasonerror = req.session.data['reason']

  if (casereasonerror != null) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern' )
  }
})


//*********************
router.post('/add-product-v4/why-is-the-product-of-concern', function (req, res) {
  const safety = req.session.data['safety']

  if (safety == null) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error' )
  } else if ((safety != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/add-product-v4/is-case-counterfeit' )
  }
})
router.post('/add-product-v4/why-is-the-product-of-concern-error', function (req, res) {
  if ((req.session.data['safety'] == null)) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error' )
  } else if ((safetyerror != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/add-product-v4/is-case-counterfeit' )
  }
})
router.post('/add-product-v4/why-is-the-product-of-concern-error-2', function (req, res) {
  if ((req.session.data['safety'] != null) && (req.session.data['why-unsafe'] == '') && (req.session.data['why-noncompliant'] == '')) {
    res.redirect('/add-product-v4/why-is-the-product-of-concern-error-2' )
  } else {
    res.redirect('/add-product-v4/is-case-counterfeit' )
  }
})
//*******************





router.post('/add-product-v4/is-case-counterfeit', function (req, res) {
  const counterfeit = req.session.data['counterfeit']

  if (counterfeit == null) {
    res.redirect('/add-product-v4/is-case-counterfeit-error' )
  } else {
    res.redirect('/add-product-v4/do-you-have-the-barcode' )
  }
})
router.post('/add-product-v4/is-case-counterfeit-error', function (req, res) {
  const counterfeiterror = req.session.data['counterfeit']

  if (counterfeiterror != null) {
    res.redirect('/add-product-v4/do-you-have-the-barcode' )
  }
})
//************* start do-you-have-the-barcode
router.post('/add-product-v4/do-you-have-the-barcode', function (req, res) {
  var barcode = req.session.data['barcode']
  var barnumber = req.session.data['barnumber']

  if ((barcode == 'yes') && (barnumber == '')) {
    return res.redirect('/add-product-v4/do-you-have-the-barcode-error-2')
  } else if ((barcode == 'yes') && (barnumber != '')) {
    return res.redirect('/add-product-v4/select-a-product-barcode')
  } else if (barcode == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  } else {
    return res.redirect('/add-product-v4/do-you-have-the-barcode-error')
  }
})
router.post('/add-product-v4/do-you-have-the-barcode-error', function (req, res) {
  var barcode1 = req.session.data['barcode']
  var barnumber1 = req.session.data['barnumber']
  if ((barcode1 == 'yes') && (barnumber1 != '')) {
    res.redirect('/add-product-v4/select-a-product-barcode')
  } else if (barcode1 == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  }
})
router.post('/add-product-v4/do-you-have-the-barcode-error-2', function (req, res) {
  var barcode2 = req.session.data['barcode']
  var barnumber2 = req.session.data['barnumber']
  if ((barcode2 == 'yes') && (barnumber2 != '')) {
    return res.redirect('/add-product-v4/select-a-product-barcode')
  } else if (barcode2 == 'no') {
    return res.redirect('/add-product-v4/search-for-an-existing-product')
  }
})
//************* start select-a-product-barcode
router.post('/add-product-v4/select-a-product-barcode', function (req, res) {
  var productitemB = req.session.data['product-item']

  if (productitemB == null) {
    return res.redirect('/add-product-v4/select-a-product-barcode-error')
  } else {
    return res.redirect('/add-product-v4/how-many-units-are-affected')
  }
})
router.post('/add-product-v4/select-a-product-barcode-error', function (req, res) {
  var productitemB2 = req.session.data['product-item']

  if (productitemB2 == null) {
    return res.redirect('/add-product-v4/select-a-product-barcode-error')
  } else {
    return res.redirect('/add-product-v4/how-many-units-are-affected')
  }
})

//************* start search for existing product
router.post('/add-product-v4/search-for-an-existing-product', function (req, res) {
  var keywords = req.session.data['keywords']

  if (keywords == '') {
    return res.redirect('/add-product-v4/search-for-an-existing-product-error')
  } else {
    return res.redirect('/add-product-v4/select-a-product')
  }
})
router.post('/add-product-v4/search-for-an-existing-product-error', function (req, res) {
  var keywords2 = req.session.data['keywords']

  if (keywords2 == '') {
    return res.redirect('/add-product-v4/search-for-an-existing-product-error')
  } else {
    return res.redirect('/add-product-v4/select-a-product')
  }
})

//************* start select-a-product
router.post('/add-product-v4/select-a-product', function (req, res) {
  var productitem = req.session.data['product-item']

  if (productitem == null) {
    return res.redirect('/add-product-v4/select-a-product-error')
  } else {
    return res.redirect('/add-product-v4/how-many-units-are-affected')
  }
})
router.post('/add-product-v4/select-a-product-error', function (req, res) {
  var productitem2 = req.session.data['product-item']

  if (productitem2 == null) {
    return res.redirect('/add-product-v4/select-a-product-error')
  } else {
    return res.redirect('/add-product-v4/how-many-units-are-affected')
  }
})

//************* start does-the-product-have-a-brand
router.post('/add-product-v4/does-the-product-have-a-brand', function (req, res) {
  var branded = req.session.data['branded']
  var brand = req.session.data['brand']

  if (branded == null) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error')
  } else if ((branded == 'yes') && (brand == '')) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error-2')
  } else {
    return res.redirect('/add-product-v4/what-is-the-product-name')
  }
})
router.post('/add-product-v4/does-the-product-have-a-brand-error', function (req, res) {
  var branded1 = req.session.data['branded']
  var brand1 = req.session.data['brand']

  if (branded1 == null) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error')
  } else if ((branded1 == 'yes') && (brand1 == '')) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error-2')
  } else if ((branded1 == 'yes') && (brand1 != '')) {
    return res.redirect('/add-product-v4/what-is-the-product-name')
  }
})
router.post('/add-product-v4/does-the-product-have-a-brand-error-2', function (req, res) {
  var branded2 = req.session.data['branded']
  var brand2 = req.session.data['brand']

  if (branded2 == null) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error')
  } else if ((branded2 == 'yes') && (brand2 == '')) {
    return res.redirect('/add-product-v4/does-the-product-have-a-brand-error-2')
  } else if ((branded2 == 'yes') && (brand2 != '')) {
    return res.redirect('/add-product-v4/what-is-the-product-name')
  }
})

//************* start search for existing product
router.post('/add-product-v4/what-is-the-product-name', function (req, res) {
  var productname = req.session.data['productname']

  if (productname == '') {
    return res.redirect('/add-product-v4/what-is-the-product-name-error')
  } else {
    return res.redirect('/add-product-v4/what-is-the-product-category')
  }
})
router.post('/add-product-v4/what-is-the-product-name-error', function (req, res) {
  var productname2 = req.session.data['productname']

  if (productname2 == '') {
    return res.redirect('/add-product-v4/what-is-the-product-name-error')
  } else {
    return res.redirect('/add-product-v4/what-is-the-product-category')
  }
})

//************* start what-is-the-product-category
router.post('/add-product-v4/what-is-the-product-category', function (req, res) {
  var category = req.session.data['category']
  var subcategory = req.session.data['subcategory']

  if ((category == '') && (subcategory == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-2')
  } else if ((category == '') && (subcategory != '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error')
  } else if ((category != '') && (subcategory == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/add-product-v4/does-the-product-have-marking')
  }
})
router.post('/add-product-v4/what-is-the-product-category-error', function (req, res) {
  var category1 = req.session.data['category']
  var subcategory1 = req.session.data['subcategory']

  if ((category1 == '') && (subcategory1 == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-2')
  } else if ((category1 == '') && (subcategory1 != '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error')
  } else if ((category1 != '') && (subcategory1 == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/add-product-v4/does-the-product-have-marking')
  }
})
router.post('/add-product-v4/what-is-the-product-category-error-3', function (req, res) {
  var category3 = req.session.data['category']
  var subcategory3 = req.session.data['subcategory']

  if ((category3 == '') && (subcategory3 == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-2')
  } else if ((category3 == '') && (subcategory3 != '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error')
  } else if ((category3 != '') && (subcategory3 == '')) {
    return res.redirect('/add-product-v4/what-is-the-product-category-error-3')
  } else {
    return res.redirect('/add-product-v4/does-the-product-have-marking')
  }
})

//************* start does-the-product-have-marking
router.post('/add-product-v4/does-the-product-have-marking', function (req, res) {
  var marking = req.session.data['marking']

  if (marking == null) {
    res.redirect('/add-product-v4/does-the-product-have-marking-error')
  } else {
    res.redirect('/add-product-v4/might-already-exist')
  }
})
router.post('/add-product-v4/does-the-product-have-marking-error', function (req, res) {
  var marking2 = req.session.data['marking']
  var mark2 = req.session.data['mark']

  if (marking2 == null) {
    res.redirect('/add-product-v4/does-the-product-have-marking-error')
  } else if ((marking2 == 'yes') && (mark2 == null)) {
    res.redirect('/add-product-v4/does-the-product-have-marking-error-2')
  } else {
    res.redirect('/add-product-v4/might-already-exist')
  }
})
router.post('/add-product-v4/does-the-product-have-marking-error-2', function (req, res) {
  var marking3 = req.session.data['marking']
  var mark3 = req.session.data['mark']

  if ((marking3 == 'yes') && (mark3 == null)) {
    res.redirect('/add-product-v4/does-the-product-have-marking-error-2')
  } else {
    res.redirect('/add-product-v4/might-already-exist')
  }
})

// *********************** new

//might-already-exist

//************* start describe-the-product
router.post('/add-product-v4/describe-the-product', function (req, res) {
  var description = req.session.data['description']

  if (description.length > 1000) {
    res.redirect('/add-product-v4/describe-the-product-error')
  } else {
    res.redirect('/add-product-v4/when-was-the-product-placed')
  }
})
router.post('/add-product-v4/describe-the-product-error', function (req, res) {
  var description2 = req.session.data['description']

  if (description2.length > 1000) {
    res.redirect('/add-product-v4/describe-the-product-error')
  } else {
    res.redirect('/add-product-v4/when-was-the-product-placed')
  }
})
//************* start when-was-the-product-placed
router.post('/add-product-v4/when-was-the-product-placed', function (req, res) {
  var whenval = req.session.data['when']

  if (whenval == null) {
    res.redirect('/add-product-v4/when-was-the-product-placed-error')
  } else {
    res.redirect('/add-product-v4/can-you-provide-an-image')
  }
})
router.post('/add-product-v4/when-was-the-product-placed-error', function (req, res) {
  var whenval2 = req.session.data['when']

  if (whenval2 == null) {
    res.redirect('/add-product-v4/when-was-the-product-placed-error')
  } else {
    res.redirect('/add-product-v4/can-you-provide-an-image')
  }
})
//****************** can-you-provide-an-image
router.post('/add-product-v4/can-you-provide-an-image', function (req, res) {
  const productimage = req.session.data['productimage']

  if (productimage == null) {
    res.redirect('/add-product-v4/can-you-provide-an-image-error')
  } else if (productimage == 'no') {
    res.redirect('/add-product-v4/how-many-units-are-affected')
  } else {
    res.redirect('/add-product-v4/upload-a-product-image')
  }
})
router.post('/add-product-v4/can-you-provide-an-image-error', function (req, res) {
  const productimage2 = req.session.data['productimage']

  if (productimage2 == null) {
    res.redirect('/add-product-v4/can-you-provide-an-image-error')
  } else if (productimage2 == 'no') {
    res.redirect('/add-product-v4/how-many-units-are-affected')
  }else{
    res.redirect('/add-product-v4/upload-a-product-image')
  }
})


//************ start upload-a-product-image
router.post('/add-product-v4/upload-a-product-image', function (req, res) {
  var imagetitle = req.session.data['imagetitle']
  var imagedesc = req.session.data['imagedesc']
  var another = req.session.data['another']

  if ((imagetitle == '') || (imagedesc == '') || (another == null)){
    res.redirect('/add-product-v4/upload-a-product-image-error')
  } else if (another == 'no') {
    res.redirect('/add-product-v4/how-many-units-are-affected')
  } else if (another == 'yes') {
    res.redirect('/add-product-v4/upload-a-product-image?timestamp=here')
  }
})
router.post('/add-product-v4/upload-a-product-image-error', function (req, res) {
  var imagetitle2 = req.session.data['imagetitle']

  if ((imagetitle2 == '') || (imagedesc == '') || (another == null)){
    res.redirect('/add-product-v4/upload-a-product-image-error')
  } else if (another == 'no') {
    res.redirect('/add-product-v4/how-many-units-are-affected')
  } else if (another == 'yes') {
    res.redirect('/add-product-v4/upload-a-product-image?timestamp=here')
  }
})


//************* routes for add-product-v4 ************* ends
/*
router.post('/add-product/counterfeit', function (req, res) {

  let counterfeit = req.session.data['counterfeit']

  if (counterfeit == 'yes') {
    res.redirect('/add-product/brand' )
  } else {
    res.redirect('/add-product/brand')
  }

})

router.post('/add-product/includes-brand', function (req, res) {

  let includesBrand = req.session.data['includes-brand']

  if (includesBrand == 'yes') {
    res.redirect('/add-product/brand-search?brand=' + req.session.data['brand'] )
  } else {
    res.redirect('/add-product/no-brand')
  }

})

router.post('/add-product/brand', function (req, res) {

  let brand = req.session.data['brand']

  if (brand == 'new') {
    req.session.data['brand'] = req.session.data['new-brand']
    res.redirect('/add-product/product-category' )
  } else {
    res.redirect('/add-product/products-for-brand')
  }

})

router.post('/add-product/set-product-category', function (req, res) {

  let productCategory = req.session.data['product-category']

  if (productCategory == 'new') {
    req.session.data['product-category'] = req.session.data['new-product-category']
  }

  res.redirect('/add-product/product-name' )

})

router.post('/add-product/existing-product', function (req, res) {

  let product = req.session.data['product']

  if (product == 'new') {
    res.redirect('/add-product/product-category' )
  } else {
    res.redirect('/add-product/product' )
  }

})

router.post('/product-categoriser/update', function (req, res) {

  let newCategory = req.session.data['new-category']

  if (newCategory == 'other') {
    res.redirect('/product-categoriser/start?search=' + req.session.data['category-name'] )
  } else {
    res.redirect('/product-categoriser/done')
  }

})
*/

module.exports = router
