import{
    useState
} from "react";

import AppSidebar
from "../components/AppSidebar";

import{
    posts
} from "../data/posts";

import{
    Search
}from "lucide-react";

function Explore() {

 const [
 search,
 setSearch
] = useState("");
const filtered =
posts.filter(
post =>
(
 post.petName +
post.username +
 post.caption
 )
.toLowerCase()
.includes(
 search.toLowerCase()
)
 );
return (
<div className="app-shell compact-shell">
 <AppSidebar />
<main className="wide-page">
<div className="page-heading">
<span>
 DISCOVER PETIFY
</span>
<h1>
Find your next
 favourite paw.
 </h1>
 <p>
Search pets, stories
and little personalities
from across Petify.
  </p>
 </div>
 <div className="explore-search">
<Search
 size={20}
 />
 <input
value={search}
onChange={
 event =>
 setSearch(
  event.target.value
)
}
 placeholder="Search Bruno, cat, park..."
/>
 </div>
 <div className="explore-grid">
{
  filtered.map(
post => (
 <article
 className="explore-card"
   key={post.id}
 >
<div className="explore-image-wrap">
  <img
     src={post.image}
     alt={post.petName}
 />
<span>
❤️ {post.likes}
</span>
 </div>
<div className="explore-info">
<strong>
     {post.petName}
</strong>
<span>
         @{post.username}
   </span>
 </div>
  </article>

 )
  )
 }
</div>
  </main>
 </div>

);
}


export default Explore;