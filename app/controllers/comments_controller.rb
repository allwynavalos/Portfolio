class CommentsController < ApplicationController
  
    before_action :authorize_request, only: [:update, :destroy]
  
    def index
      comments = Comment.all
      render json: comment
    end
  
    def show
      render json: @comment, include: :comments
    end
  
    def create
      comment = Comment.new(comment_params)
      if project.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end
  
    def update
      @comment = Comment.find(params[:id])
      if @comment.update(comment_params)
        render json: @comment, status: :ok
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @comment = Comment.find(params[:id])
      @comment.destroy
      render json: "DELETED"
    end
  
  
    private
  
    def comment_params
      params.require(:comment).permit(:name, :content)
    end
  
  
    def get_comment
      @comment = Comment.find(params[:id])
    end
  end
  
