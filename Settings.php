<?php
namespace AlbumEnvy\Popup;
// 2018-05-21
/** @method static Settings s() */
final class Settings extends \Df\Config\Settings {
	/**
	 * 2018-05-21
	 * @used-by \AlbumEnvy\Popup\Content::_toHtml()
	 * @return string|null
	 */
	function content() {return df_cms_block_content($this->i());}

	/**
	 * 2018-05-21
	 * @override
	 * @see \Df\Config\Settings::prefix()
	 * @used-by \Df\Config\Settings::v()
	 * @return string
	 */
	protected function prefix() {return 'albumenvy_mediaclip/how_to_popup';}
}