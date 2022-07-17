const RenderPosts = ({ posts }) => {
    let i=0;
    while(i<99999999){
        i++;
    }

  if (posts) {
    return (
      <div className="posts-wrapper">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <div className="post">
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RenderPosts;
