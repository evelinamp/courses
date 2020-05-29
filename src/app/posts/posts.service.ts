import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) // angular finds it

export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts]; // all elements from posts, pulled them aout of teh array and add the to this new array || this is done in order to not affect originar array (because of reference)
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
