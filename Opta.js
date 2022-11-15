/* eslint-disable no-undef */

;(function () {
	const extractURLParams = (uri) => {
		if (!uri) return null
		// eslint-disable-next-line no-unused-vars
		const [_, strParams] = uri.split('?')
		return new URLSearchParams(decodeURIComponent(strParams))
	}
	const scriptParams = extractURLParams(qs.j)
	if (scriptParams.has('site')) {
		const site = scriptParams.get('site')
		const isRtl = ['aja', 'ajd', 'ajm'].includes(site)
		$('html').addClass(`theme-are mode-dark`)
		$('html').addClass(`amp-iframe`)
		if (isRtl) {
			$('html').attr('dir', 'rtl')
			$('head').append(
				'<link rel="stylesheet" href="https://secure.widget.cloud.opta.net/v3/css/v3.rtl.opta-widgets.css">'
			)
		} else {
			$('html').attr('dir', 'ltr')
		}
	}

	if (scriptParams.has('mode')) {
		$('html').addClass(`mode-${scriptParams.get('mode')}`)
	}
	if (scriptParams.has('section')) {
		$('html').addClass('sports-body')
	}
	// TODO: move to separate file and import here, this will take a separate webpack task.
	const widgetTag = $('#widget_tag')[0]
	const idMapping = {
		competition_stats: 'competition_stats_normal',
		fixtures: ['fixtures_grid', 'fixtures_normal', 'fixtures_strip'],
		matchday_live: 'matchday_live_normal',
		matchstats: 'matchstats_custom',
		match_player_compare: 'match_player_compare_normal',
		match_preview: 'match_preview_normal',
		match_summary: 'match_summary_normal',
		player_match_performance: 'player_match_performance_normal',
		player_profile: 'player_profile_normal',
		player_ranking: 'player_ranking_normal',
		season_player_stats: 'season_player_stats_normal',
		squad: 'squad_normal',
		standings: 'standings_normal',
		starting_formations: 'starting_formations_normal',
		team_profile: 'team_profile_normal',
		tournament_tree: 'tournament_tree_normal',
	}
	const conditionalAttrs = {}
	let widgetId = ''

	$._.each(qs.w.split('¦'), function parseAttrs(attrset) {
		const [attr, val] = attrset.split('~')
		if (['widget', 'template'].includes(attr)) {
			conditionalAttrs[attr] = val.trim()
		}
	})
	const widgetAttrVal = conditionalAttrs?.widget
	const mappedId = idMapping[widgetAttrVal.trim()]
	if (widgetAttrVal && mappedId) {
		if (
			Array.isArray(mappedId) &&
			mappedId.includes(`${widgetAttrVal}_${conditionalAttrs?.template}`)
		) {
			widgetId = `${widgetAttrVal}_${conditionalAttrs?.template}`
		} else if (!Array.isArray(mappedId)) {
			widgetId = mappedId
		}
	}
	const figure = document.createElement('figure')
	figure.id = widgetId
	figure.innerHTML = widgetTag.outerHTML
	widgetTag.parentNode.replaceChild(figure, widgetTag)
	Opta?.events.subscribe('widget.loaded', ({ widget }) => {
		const [elem] = widget?.dom
		const parentElem =
			elem.parentNode.id !== 'widget_tag'
				? elem.parentNode
				: elem.parentNode.parentNode
		const actualDomHeight = document.querySelector(
			`#${elem.id}`
		).clientHeight
		if (parentElem) {
			parentElem.style.minHeight = actualDomHeight + 'px'
		}
		window.parent.postMessage(
			{
				sentinel: 'amp',
				type: 'embed-size',
				height: actualDomHeight,
			},
			'*'
		)
	})
})()