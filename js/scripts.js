var audioContext = new (window.AudioContext || window.webkitAudioContext);



var source = audioContext.createBufferSource();
source.buffer

var merger = audioContext.createChannelMerger(6);
var splitter = audioContext.createChannelSplitter(2);

source.connect(splitter);

splitter.connect(destination, 0);

Class Buffer {
	constructor(audioContext, urls){
		this.audioContext = audioContext;
		this.urls = urls;
		this.buffer = [];
	}
}