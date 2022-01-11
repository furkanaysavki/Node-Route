exports.getIndexPage= (req,res)=>{
    res.status(200).send('Index Sayfası',{
        page_name:'index',
    });
}
