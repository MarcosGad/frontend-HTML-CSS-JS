<!DOCTYPE html>
<html>
<head>
    <title>form validator</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    
    
    <div class="container">
        <div class="panel panel-default">
            
                <div class="panel-heading">
                    <h3 class="panel-title">Add Post</h3>        
                </div>
            
            <div class="panel-body">
                
                <form class="form-rtl has-validation-callback" method="post" action="" id="form-add-post" enctype="multipart/form-data">
                    <div class="row form-group">
                        <label for="post_name" class="col-sm-2 control-lable">Post Name :</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="post_name" name="post_name" placeholder="Post Name" data-validation="length" data-validation-length="5-20">                      
                        </div>
                    </div>
                    
                    <div class="row form-group">
                        <label for="post_title" class="col-sm-2 control-lable">Post Title :</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="post_name" name="post_title" placeholder="Post Title" data-validation="custom" data-validation-regexp="^([a-zA-Z-]+)$">                  
                        </div>
                    </div>
                    
                    <div class="row form-group">
                        <label for="post_content" class="col-sm-2 control-lable">Post Content :</label>
                        <div class="col-sm-10">
                            <textarea class="form-control" rows="8" id="post_content" name="post_content" placeholder="Post Content"></textarea>      
                        </div>
                    </div>
                    
                    <div class="row form-group">
                        <label for="post_image" class="col-sm-2 control-lable">Post Image :</label>
                        <div class="col-sm-10">
                            <input type="file" name="post_image" id="post_image" data-validation="required size"  data-validation-allowing="jpg, png, gif" data-validation-max-size="2M" data-validation-error-msg="يجب ان تكون الصورة اقل من 2 ميجا">
		                    
                        </div>
                    </div>
                    
                    
                    <div class="row form-group text-center">
                        <div class="col-sm-10 cmd-btn">
                            <button id="btn-save-post" type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                
                <p>
                  Password (at least 8 characters)
                  <input name="pass_confirmation" data-validation="length" data-validation-length="min8">

                  Confirm password
                  <input name="pass" data-validation="confirmation">    
                </p>
                
                </form>

            </div>        
        </div>
    </div>
    
    
    
    
<script src="js/jquery-1.7.min.js"></script>
<script src="js/form-validator/jquery.form-validator.js"></script>
<script src="js/myform.js"></script>    
</body>
</html>