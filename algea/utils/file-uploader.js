// 文件上传组件
class FileUploader extends React.Component {

  constructor(props) {
    super(props);
    // 处理拖拽上传的问题(判断是否进入子元素，避免拖拽冒泡bug)
    this.enteredCounter = 0; // Determine whether to enter the child element to avoid dragging bubbling bugs。
  }

  componentWillUnmount() {
    // prevent async operation 阻止异步操作
    this.setState = (state, callback) => {
      return;
    };
  }

  // input 上传文件或者图片时，阻止点击事件冒泡
  onClick = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
  }

  // 点击外部的容器 div 时，回调函数触发这里，然后点击 input（上传文件）
  uploadFileClick = () => {
    this.uploadFileRef.click();
  }

  // 拖拽开始回调函数
  onDragEnter = (e) => {
    const { isSupportDragDrop, updateParentTips } = this.props;
    // 如果支持拖拽，那么阻止默认事件，然后计数器加1，更新父组件的提示信息（开始拖拽）
    if (isSupportDragDrop) {
      e.preventDefault();
      this.enteredCounter++;
      if (this.enteredCounter !== 0) {
        updateParentTips(true);
      }
    }
  }

  // 拖动过程中，阻止事件冒泡
  onDragOver = (e) => {
    const { isSupportDragDrop } = this.props;
    if (isSupportDragDrop) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  // 拖拽结束：计数器减少1，并执行父组件回调函数
  onDragLeave = (e) => {
    const {isSupportDragDrop, updateParentTips, isCellContent} = this.props;
    if (isSupportDragDrop) {
      this.enteredCounter--;
      if (this.enteredCounter === 0 || isCellContent) {
        updateParentTips(false);
      }
    }
  }

  // 拖拽释放
  onDrop = (event) => {
    const { isSupportDragDrop, updateParentTips, onCellTipShow, t } = this.props;
    // 如果支持拖拽
    if (isSupportDragDrop) {
      // 设置计数器是0，然后执行父组件回调函数
      this.enteredCounter = 0;
      updateParentTips(false);

      // 通过 dataTransfer.files 获取拖拽的文件
      let files = event.dataTransfer.files;
      // 如果拖动的是单元格，显示提示文本
      if (files.length === 0) {
        let message = t('No_support_dragging_files_from_cell_to_cell');
        if (onCellTipShow) onCellTipShow(message);
        return;
      }
      // 处理文件变化回调函数
      this.handleFilesChange(files);
    }
  }

  // 粘贴回调函数
  onPaste = (event) => {
    const { isSupportPaste } = this.props;
    if (isSupportPaste) {
      event.stopPropagation();
      // 从剪切板中获取数据
      let cliperData = getEventTransfer(event);
      // 如果有文件，获取文件
      if (cliperData.files) {
        let files = cliperData.files;
        this.handleFilesChange(files, true);
      }
    }
  }

  // 鼠标进入或者退出后，父组件更新提示文字
  onMouseEnter = () => {
    const { updateParentTips, uploadType } = this.props;
    if (uploadType === 'image' && updateParentTips) {
      updateParentTips(true, uploadType);
    } 
  }

  onMouseLeave = () => {
    const { updateParentTips, uploadType } = this.props; 
    if (uploadType === 'image' && updateParentTips) {
      updateParentTips(false, uploadType);
    }
  }

  // input 文件变化后，触发这个函数
  uploadFilesChange = (event) => {
    this.handleFilesChange(event.target.files);
  }

  // 拖拽释放、粘贴、点击input，都会触发这个函数
  handleFilesChange = (files, isPasteUpload = false) => {
    const _this = this;
    const { uploadType, updateUploadFileList, onCellTipShow, t } = this.props;

    let uploadFileList = [];
    let dealFileCnt = 0; 
    let allFileLen = files.length;

    // 辅助函数（检查是否上传结束）
    function checkLoadFinish () {

      // 如果
      if (dealFileCnt === allFileLen - 1) {
        if (uploadFileList.length === 0) {
          if (uploadType === 'image') {
            let message = files.length > 1 ? t('There_are_no_images_in_this_file_list') : t('The_file_is_not_an_image');
            if (onCellTipShow) {
              onCellTipShow(message);
            }
          }
          return;
        }
        // 更新上传列表
        if (updateUploadFileList) {
          updateUploadFileList(uploadFileList);
        }
        _this.getFilesCallBack(uploadFileList);
      }

      dealFileCnt++;
    }

    // 循环处理文件
    for (let i = 0; i < allFileLen; i++) {
      let uploadFile = files[i];

      // 如果是复制上传，并且上传的名字是 image.png 那么需要重命名，并重新创建文件
      if (isPasteUpload && uploadFile.name === 'image.png') {
        let newName = `image-time-stamp.png`;
        uploadFile = new File([uploadFile], newName, {type: uploadFile.type});
      }

      try {
        // 新建文件阅读器对象
        let fileReader = new FileReader();

        // 把上传的文件读取
        fileReader.readAsDataURL(uploadFile);

        // 当文件加载后，触发函数
        fileReader.addEventListener('load', function (event) {
          // 如果是图片/文件
          let isImage = /image/i.test(uploadFile.type);
          if (uploadType === 'file' || isImage) {
            // 设置上传文件的信息
            let uploadFileItem = {
              name: uploadFile.name,
              fileIconUrl: isImage ? event.target.result : getFileIconUrl(uploadFile.name),
              isUploading: true,
              isErrorTip: false,
              uploadFile: uploadFile,
              size: uploadFile.size,
              url: '',
              type: uploadType === 'file' ? 'file' : '',
              percent: 0,
            };
            // 把文件信息放在列表中
            uploadFileList.push(uploadFileItem);
          }
          检查是否加载
          checkLoadFinish();
        }, false);
        
        // 当文件上传错误后，检查是否结束
        fileReader.addEventListener('error', function (e) {
          checkLoadFinish();
        }, false);
      } catch (event) {
        // 当发生错误后，检查是否结束
        checkLoadFinish();
      }
    }
  }

  // 上传后的回调函数
  getFilesCallBack = (files) => {
    files.forEach(file => {
      this.getAssetUploadLink(file);
    });
  }
  // 每一个文件执行下面的函数
  getAssetUploadLink = (uploadFile) => {
    let { dtableWebAPI } = window;
    let { workspaceID, fileName } = window.dtable;
    return (
      // 请求获取表格的上传链接，然后开始上传文件
      dtableWebAPI.getTableAssetUploadLink(workspaceID, fileName).then((res) => {
        let assetUploadLinkMessage = res.data;
        this.uploadFile({assetUploadLinkMessage, uploadFileMessage: uploadFile});
      })
    );
  }

  // 上传文件
  uploadFile = (options) => {
    let { dtableWebAPI } = window;
    let { server, workspaceID } = window.dtable;
    let { uploadType, onFileUploadFailed } = this.props;
    const { assetUploadLinkMessage, uploadFileMessage } = options;

    // 获取上传链接
    const uploadLink = assetUploadLinkMessage.upload_link + '?ret-json=1';
    // 获取表单数据
    const formData = new FormData();

    // 设置父路径和相对路径
    let parentPath = assetUploadLinkMessage.parent_path;
    let relativePath = assetUploadLinkMessage.img_relative_path;
    if (uploadType === 'file') {
      relativePath = assetUploadLinkMessage.file_relative_path;
    }

    // 表单数据增加相对路径
    formData.append('parent_dir', parentPath);
    formData.append('relative_path', relativePath);
    formData.append('file', uploadFileMessage.uploadFile);

    // 上传过程中，更新进度
    const cb = (event) => {
      this.onUploadProgress(event, uploadFileMessage);
    };

    // 上传图片
    dtableWebAPI.uploadImage(uploadLink, formData, cb).then(res => {
      // 上传结束后，更新文件信息（uploadFileMessage.）
      let url = server + '/workspace/' + workspaceID + parentPath + `/${relativePath}/` + encodeURIComponent(res.data[0].name);
      uploadFileMessage.name = res.data[0].name;
      uploadFileMessage.isUploading = false;
      uploadFileMessage.size = res.data[0].size;
      uploadFileMessage.url = url;
      // 然后执行回调函数（成功上传）
      this.props.onFileUploadSuccess(uploadFileMessage);
    }).catch(error => {
      // 上传失败后，界面提示
      const { t } = this.props;
      let errMsg = getErrorMsg(error, true);
      if (!error.response || error.response.status !== 403) {
        toaster.danger(t(errMsg));
      }
      uploadFileMessage.isErrorTip = true;
      if (onFileUploadFailed) {
        onFileUploadFailed(uploadFileMessage);
      }
    });
  }

  // 再次上传函数（没用到）
  // uploadFileAgain = (uploadFileInfo) => {
  //   uploadFileInfo.isErrorTip = false;
  //   this.handleFileChange(uploadFileInfo);
  // }

  // 上传过程中的回调函数（大文件上传）
  onUploadProgress = (event, uploadFileMessage) => {
    const { onFileUploadProgress } = this.props;
    // 获取上传的百分比
    let uploadPercent = Math.floor(event.loaded / event.total * 100);
    uploadFileMessage.percent = uploadPercent;
    // 然后传递到父组件
    if (onFileUploadProgress) {
      onFileUploadProgress(uploadFileMessage);
    }
  }

  // 获取事件对象（把拖拽函数绑定到父组件的事件对象上，并返回）
  getEvents = () => {
    let { events } = this.props;
    events.onDragEnter = this.onDragEnter;
    events.onDragLeave = this.onDragLeave;
    events.onDrop = this.onDrop;
    return events;
  }

  // 渲染上传的组件（父组件中传入）
  renderUploaderElement = () => {
    const { uploadType, style, innerRef, isCellContent } = this.props;

    // 如果是单元格内容，直接渲染父组件
    if (isCellContent) {
      let events = this.getEvents();
      return (
        <div
          className={this.props.className}
          {...events}
          style={style}
          ref={ref => innerRef(ref)}
        >
          {this.props.children}
        </div>
      );
    }

    // 不是单元格，那么渲染 div 和上传组件
    return (
      <div
        onDragEnter={this.onDragEnter} 
        onDragOver={this.onDragOver} 
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop} 
        onPaste={this.onPaste}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.uploadFileClick}
        className={this.props.className}
      >
        {this.props.children}
        {/* 下面是上传的 input */}
        {uploadType === 'file' &&
          <input type="file" className='upload-image' ref={ref => this.uploadFileRef = ref} onClick={this.onClick} onChange={this.uploadFilesChange} value="" multiple /> 
        }
        {uploadType === 'image' &&
          <input type="file" className='upload-image' accept="image/*" ref={ref => this.uploadFileRef = ref} onClick={this.onClick} onChange={this.uploadFilesChange} value="" multiple />
        }
      </div>
    );
  }
  
  render() {
    const uploaderElement = this.renderUploaderElement();
    return (
      <Fragment>
        {uploaderElement}
      </Fragment>
    );
  }
}
