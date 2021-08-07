const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
 
 about.addEventListener('click', function(e)
 {
 	const id  = e.target.dataset.id;
 	if (id) 
 	{
 		// removing active from all buttons 
 		//then adding it back to the button which is clicked

 		btns.forEach(function(btn) 
 		{
 			btn.classList.remove('active');
 			e.target.classList.add('active');
 		});

 		// removing active from all text articles 
 		//then adding it back to the articles 
 		//whose relative button which is clicked
 
        articles.forEach(function(article) 
        {
        	article.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
 	}
 }); 