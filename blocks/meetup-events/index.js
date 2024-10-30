const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { dateI18n, getSettings } = wp.date;
const {
	PanelBody,
	PanelRow,
	Button,
	Dropdown,
	RangeControl,
	SelectControl,
	ToggleControl,
	RadioControl,
	DateTimePicker,
} = wp.components;
var InspectorControls = wp.blockEditor.InspectorControls;

registerBlockType("ime-block/meetup-events", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __("Meetup Events"),
    description: __("Block for Display Meetup Events"),
    icon: {
      foreground: "#F64060",
      src: (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 525 500"
        >
          <path
            fill="#F64060"
            d="M452.753,321.453c0.041,45.508-32.731,84.711-77.295,92.419c-5.611,0.963-11.277,1.533-16.971,1.479
    c-1.92-0.021-2.674,0.747-3.283,2.506c-8.897,25.544-26.652,40.771-53.473,44.611c-17.743,2.538-33.844-2.22-47.958-13.313
    c-1.966-1.546-3.168-1.572-5.218-0.107c-16.508,11.807-35.017,17.036-55.229,15.815c-39.441-2.381-72.627-32.526-78.835-71.398
    c-0.427-2.687-0.881-5.394-0.922-8.102c-0.041-2.252-0.896-3.121-3.047-3.542c-11.941-2.328-22.777-7.246-32.337-14.729
    c-17.594-13.775-28.15-31.761-30.607-54.009c-2.802-25.464,5.063-47.481,22.975-65.828c1.444-1.472,1.534-2.497,0.549-4.228
    c-6.886-12.022-10.15-25.043-9.62-38.851c1.322-34.461,25.302-62.932,58.657-69.981c3.859-0.82,5.882-2.333,7.578-5.99
    c16.452-35.445,44.076-57.002,82.409-64.112c26.909-4.994,52.294,0.353,75.85,14.208c1.98,1.168,3.638,1.262,5.781,0.638
    c37.413-10.855,70.564-2.958,98.708,23.803c16.644,15.822,25.763,35.846,28.463,58.69c0.591,4.994,0.86,10.035,0.48,15.056
    c-0.143,1.899,0.441,2.693,2.239,3.358c16.866,6.243,28.496,17.885,33.584,35.105c6.337,21.42,1.014,40.203-14.992,55.821
    c-1.387,1.356-1.094,2.186-0.308,3.541C448.39,288.886,452.772,304.572,452.753,321.453z M285.814,314.146
    c0.014,19.363,12.444,36.477,30.071,42.292c8.834,2.917,17.946,4.301,27.195,4.708c6.603,0.285,13.195-0.176,19.296-3.217
    c4.797-2.395,7.057-6.351,6.84-11.622c-0.217-5.306-2.593-9.274-7.668-11.386c-1.764-0.733-3.555-1.33-5.428-1.655
    c-5.598-0.999-11.223-1.84-16.793-2.944c-9.193-1.831-13.048-6.697-13.17-15.993c-0.107-8.223,2.124-15.979,4.654-23.652
    c4.628-14.045,10.868-27.431,16.848-40.927c5.773-13.033,11.825-25.959,15.903-39.686c2.246-7.538,3.318-15.096,1.276-22.892
    c-3.108-11.833-10.199-19.764-22.426-22.045c-11.194-2.083-22.336-2.32-32.459,4.356c-3.366,2.212-6.603,1.683-9.525-0.896
    c-2.232-1.961-4.356-4.037-6.541-6.052c-10.326-9.533-23.978-10.001-35.064-1.295c-4.473,3.514-8.237,7.871-13.096,10.924
    c-4.342,2.727-8.72,3.5-13.528,0.936c-4.58-2.443-9.322-4.593-14.052-6.737c-4.791-2.164-9.432-4.837-14.825-5.292
    c-17.058-1.452-34.909,8.685-42.434,24.094c-3.339,6.819-6.065,13.903-8.65,21.033c-11.936,32.962-21.658,66.629-31.72,100.18
    c-4.506,15.016,0.812,29.792,13.527,37.902c9.92,6.322,20.782,7.885,32.027,4.506c9.11-2.742,14.099-10.075,17.586-18.313
    c11.588-27.329,22.024-55.122,33.07-82.668c3.04-7.58,5.983-15.192,9.208-22.69c3.256-7.571,12.612-10.15,18.162-5.129
    c3.388,3.065,4.281,7.145,3.949,11.507c-0.365,4.662-2.171,8.962-3.867,13.244c-7.187,18.17-14.507,36.287-21.726,54.443
    c-1.459,3.672-3.04,7.314-3.685,11.255c-1.105,6.767,1.574,12.765,7.109,15.152c5.647,2.437,11.509,2.844,17.363,0.719
    c6.812-2.469,10.883-7.802,14.019-13.964c10.775-21.16,21.467-42.372,32.235-63.533c4.974-9.776,10.035-19.506,15.116-29.224
    c1.888-3.602,4.1-7.015,7.627-9.254c3.184-2.015,6.615-2.165,9.879-0.332c3.185,1.784,3.398,5.042,3.264,8.258
    c-0.073,1.729-0.557,3.419-1.222,5.027c-1.396,3.344-2.7,6.738-4.248,10.016c-8.956,18.841-18.048,37.609-26.924,56.491
    C289.246,297.76,285.352,305.767,285.814,314.146z M411.438,453.001c0.021-12.498-10.455-22.948-23.056-22.982
    c-12.912-0.047-23.387,10.286-23.443,23.104c-0.054,12.53,10.6,23.162,23.199,23.178
    C400.915,476.314,411.418,465.812,411.438,453.001z M21.931,261.48c12.152,0.027,22.377-10.13,22.329-22.173
    c-0.055-12.063-10.062-22.065-22.112-22.099C9.798,217.175-0.007,226.973,0,239.342C0.01,251.581,9.786,261.453,21.931,261.48z
    M294.038,13.766c-12.213-0.068-22.167,9.696-22.236,21.8c-0.074,12.091,9.845,22.025,21.997,22.038
    c12.104,0.007,21.826-9.689,21.848-21.801C315.676,23.632,306.061,13.827,294.038,13.766z M473.854,150.79
    c-0.054-10.036-8.61-18.571-18.686-18.639c-10.286-0.074-18.999,8.618-18.93,18.883c0.073,10.239,8.379,18.448,18.679,18.462
    C465.528,169.517,473.914,161.226,473.854,150.79z M88.601,97.201c0,9.425,7.335,16.82,16.698,16.834
    c9.484,0.013,16.841-7.422,16.807-16.983c-0.034-9.274-7.382-16.528-16.712-16.5C95.799,80.571,88.606,87.702,88.601,97.201z
    M264.007,485.922c0.081-7.85-6.378-14.315-14.317-14.343c-8.149-0.025-14.549,6.29-14.528,14.33
    c0.021,7.931,6.388,14.214,14.394,14.214C257.555,500.13,263.938,493.86,264.007,485.922z M487.981,262.879
    c-7.627-0.055-14.243,6.561-14.182,14.181c0.066,7.53,6.352,13.712,13.964,13.727c7.98,0.015,13.965-5.861,13.984-13.747
    C501.769,269.236,495.641,262.933,487.981,262.879z M152.997-0.123c-6.724-0.027-11.914,5.109-11.914,11.8
    c0,6.649,5.244,11.819,11.962,11.785c6.52-0.034,11.629-5.232,11.629-11.834C164.675,4.965,159.646-0.089,152.997-0.123z
    M514.591,199.506c-5.481-0.062-10.448,4.844-10.517,10.401c-0.074,5.747,4.709,10.53,10.544,10.544
    c5.795,0.021,10.34-4.485,10.381-10.306C525.054,204.29,520.439,199.58,514.591,199.506z M99.538,406.504
    c0.026-5.564-4.771-10.354-10.422-10.407c-5.728-0.049-10.437,4.77-10.396,10.632c0.047,5.727,4.695,10.251,10.484,10.211
    C94.884,416.905,99.519,412.23,99.538,406.504z"
          />
        </svg>
      )
    },
    category: "widgets",
    keywords: [__("Events"), __("Meetup"), __("meetup events")],
    attributes: {
        col: {
			type: 'number',
			default: 2,
		},
		posts_per_page: {
			type: 'number',
			default: 12,
		},
		past_events: {
			type: 'boolean',
     		default: false
		},
		start_date: {
			type: 'string',
			default: '',
		},
		end_date: {
			type: 'string',
			default: '',
		},
		order: {
			type: 'string',
			default: 'ASC',
		},
		orderby: {
			type: 'string',
			default: 'event_start_date',
		},
		layout: {
			type: 'string',
			default: '',
		},
    },
    edit: ( { attributes, setAttributes } ) => {
        const { col, posts_per_page, past_events, start_date, end_date, order, orderby, layout } = attributes;
		const settings = getSettings();
		const dateClassName = past_events === true ? 'ime_hidden' : '';
		const { serverSideRender: ServerSideRender } = wp;

		const is12HourTime = /a(?!\\)/i.test(
			settings.formats.time
				.toLowerCase() // Test only the lower case a
				.replace( /\\\\/g, '' ) // Replace "//" with empty strings
				.split( '' ).reverse().join( '' ) // Reverse the string and test for "a" not followed by a slash
		);
        return (
            <div>
                <InspectorControls>
					<PanelBody title={ __( 'Meetup Events Setting' ) }>
						<RangeControl
								label={ __( 'Columns' ) }
								value={ col || 2 }	
								onChange={ ( value ) => setAttributes( { col: value } ) }
								min={ 1 }
								max={ 4 }
							/>
						<RangeControl
							label={ __( 'Events per page' ) }
							value={ posts_per_page || 12 }
							onChange={ ( value ) => setAttributes( { posts_per_page: value } ) }
							min={ 1 }
							max={ 100 }
						/>
						<ToggleControl
							label={ __( 'Display past events' ) }
							checked={ past_events }
							onChange={ value => {
								return setAttributes( { 
									start_date: '',
									end_date: '',
									past_events: value
								} );
							}
							}
						/>
						<SelectControl
							label="Event Grid View Layout"
							value={ layout }
							options={ [
								{ label: 'Default', value: '' },
								{ label: 'Style 2', value: 'style2' },
							] }
							onChange={ ( value ) => setAttributes( { layout: value } ) }
						/>
						<SelectControl
							label="Order By"
							value={ orderby }
							options={ [
								{ label: 'Event Start Date', value: 'event_start_date' },
								{ label: 'Event End Date', value: 'event_end_date' },
								{ label: 'Event Title', value: 'title' },
							] }
							onChange={ ( value ) => setAttributes( { orderby: value } ) }
						/>
						<RadioControl
							label={ __( 'Order' ) }
							selected={ order }
							options={ [
								{ label: __( 'Ascending' ), value: 'ASC' },
								{ label: __( 'Descending' ), value: 'DESC' },
							] }
							onChange={ value => setAttributes( { order: value } ) }
						/>
						<PanelRow className={ `ime-start-date ${ dateClassName }` }>
							<span>{ __( 'Event Start Date' ) }</span>
							<Dropdown
								label={ __( 'Start Date' ) }
								position="bottom left"
								contentClassName="ime-start-date__dialog"
								popoverProps={ { placement: 'bottom-start' } }
								renderToggle={ ( { isOpen, onToggle } ) => (
									<Button
										type="button"
										className="ime-start-date__toggle"
										onClick={ onToggle }
										aria-expanded={ isOpen }
										isLink
									>
										{ eventDateLabel( start_date, true ) }
									</Button>
								) }
								renderContent={ () =>
									<DateTimePicker
										currentDate={ start_date !== '' ? start_date : new Date() }
										onChange={ ( value ) => setAttributes( { start_date: value } ) }
										locale={ settings.l10n.locale }
										is12Hour={ is12HourTime }
										__nextRemoveHelpButton
										__nextRemoveResetButton
									/>
								}
							/>
						</PanelRow>
						<PanelRow className={ `ime-end-date ${ dateClassName }` }>
							<span>{ __( 'Event End Date' ) }</span>
							<Dropdown
								label={ __( 'End Date' ) }
								position="bottom left"
								contentClassName="ime-end-date__dialog"
								popoverProps={ { placement: 'bottom-start' } }
								renderToggle={ ( { isOpen, onToggle } ) => (
									<Button
										type="button"
										className="ime-end-date__toggle"
										onClick={ onToggle }
										aria-expanded={ isOpen }
										isLink
									>
										{ eventDateLabel( end_date ) }
									</Button>
								) }
								renderContent={ () =>
									<DateTimePicker
										currentDate={ end_date !== '' ? end_date : new Date() }
										onChange={ ( value ) => setAttributes( { end_date: value } ) }
										locale={ settings.l10n.locale }
										is12Hour={ is12HourTime }
										__nextRemoveHelpButton
										__nextRemoveResetButton
									/>
								}
							/>
						</PanelRow>
					</PanelBody>
                </InspectorControls>
				<ServerSideRender
					block="ime-block/meetup-events"
					attributes={attributes}
					key={JSON.stringify(attributes)}
				/>
            </div>
        );
    },
	save: function() {
		// Rendering in PHP.
		return null;
	},
});
function eventDateLabel( date, start ) {
	const settings = getSettings();
	const defaultLabel = start ? __( 'Select Start Date' ) : __( 'Select End Date' );
	return date ?
		dateI18n( settings.formats.datetime, date ) :
		defaultLabel;
}