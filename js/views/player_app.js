define([
	'jquery',
	'underscore',
	'backbone',
	'utils',

	'views/media_search',
	'views/youtube_player',
	'views/content_layout',
	'views/results_navigation',
	'views/feed_filter',
	'views/youtube_playlists_provider',
	'views/user_profile_manager',

	'collections/history_playlist'
], function(
	$, _, Backbone, Utils,
	MediaSearch, YoutubePlayer, ContentLayoutView,
	ResultsNavigation, FeedFilter, YoutubePlaylistsProvider, UserProfileManager,
	HistoryPlaylist) {
   
	var PlayerApp = Backbone.View.extend({
		el: '.container-main',
		
		initialize: function() {
			//- create an instance of the media provider
			this.modules = {};
			this.modules.searchBar = new MediaSearch({ model: this.model });
			this.modules.youtubePlayer = new YoutubePlayer({ model: this.model });
			this.modules.contentView = new ContentLayoutView({ model: this.model });
			this.modules.resultsNav = new ResultsNavigation({ model: this.model });
			// this.modules.historyPlaylistData = new HistoryPlaylist();
			this.modules.searchFeedFilter = new FeedFilter({ model: this.model });
			this.modules.userPlaylists = new YoutubePlaylistsProvider({ model: this.model });
			this.modules.userProfileManager = new UserProfileManager({ model: this.model });

			// set correct heights
			$(window).on('resize', _.bind(this.setSize, this));
			this.setSize();
			// this.model.connectUser();
		},

		setSize: function() {
			// 10 is for keeping the bottom line of content stick
			// to the footer bar
			this.$el.height(Utils.getPortviewSize().height + 10);	
		}

		// renderHistory: function() {
		// 	this.modules.contentView.update( this.modules.historyPlaylistData.toJSON().reverse() );
		// 	return this;
		// },

	});
   
	return PlayerApp;
});