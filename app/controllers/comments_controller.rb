class CommentsController < ApplicationController

  # GET /comments ; /comments.json
  def index
    @comments = Comment.all
  end

  # POST /articles/id/comments
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article)
  end

  #DELETE /articles/id/comments/id ; /articles/id/comments/id.json
  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :texto)
  end

end
