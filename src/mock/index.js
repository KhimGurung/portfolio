import { 
    reactjs_portfolio,
    reactjs_blog,
    reactjs_sbuikit,
    reactjs_events,
    reactjs_vbanking,
    reactjs_magazine,
    reactnative_meetup,
    reactnative_eticket,
    reactnative_bpccs,
    reactnative_rapidinfo,
    xamarinform_login,
    xamarinform_registration,
    xamarinform_eticket,
    flutter_eticket,
    flutter_epayment,
    flutter_vaccation,
    flutter_epayment_gif,
    flutter_vaccation_gif,
    reactnative_bpccs_gif,
    reactnative_rapidinfo_gif,
    reactnative_meetup_gif,
    reactnative_eticket_gif
} from '../assets'

export const reactjsWork=[
    {
        image: reactjs_portfolio,
        title: "Portfolio",
        description: "This is a portfolio website design and implemented in ReactJs. I designed this website for my own portfolio. It includes personal information about the person and the services he/she can provide. Education and Experience is also included in the design in timeline manner. Also, it includes the works section in the home page and also a seperate page for it where user can filter the work according to the technology. Also the detail page of the work where description of the work and some screenshots and gif included. ",
        category: "ReactJs"
    },
    {
        image: reactjs_blog,
        title: "Blog",
        description: "A simple blog website design and implemented in ReactJs. Currently it has two pages, one for blog list and another to view the blog. It is fully responsive and still under going development. Blog detail page incldues comments about the blog from the reader and can leave comment as well.",
        category: "ReactJs"
    },
    {
        image: reactjs_sbuikit,
        title: "SBUIKit",
        description: "This website design can be found in the internet provided by 'Start Bootstrap'. Originally, the design in implemented using Bootstrap. However, for the practice purpose, I have implemented the design in ReactJs. You can view the design in the link https://startbootstrap.com/previews/sb-ui-kit-pro ",
        category: "ReactJs"
    },
    {
        image: reactjs_events,
        title: "Events",
        description: "It is a web application for digitilizing manual tickets for different events. Frot end of the application is designed by me and implemented in ReactJs.",
        category: "ReactJs"
    },
    {
        image: reactjs_vbanking,
        title: "Virtual Banking",
        description: "It is a single page website for virtual banking. The implementation of the design can be found in youtube  by Brian Design. I have followed him for the learning purpose and clone the design accordingly. Styled Component css extension is used in this implemntation. You can also follow yourself the tutorial in youtube https://www.youtube.com/watch?v=Nl54MJDR2p8&t=9615s&ab_channel=BrianDesign",
        category: "ReactJs"
    },
    {
        image: reactjs_magazine,
        title: "E-Magazine",
        description: "It is multipage magazine website. Viewing news and buying digital magazine is primary features of this application.",
        category: "ReactJs"
    }             
]

export const reactnativeWork=[
    {
        image: reactnative_rapidinfo,
        gif: reactnative_rapidinfo_gif,
        title: "RapidInfo",
        description: "It delivers heat, light and mobility products and services to people all around the world in ways that will help to drive the transition to a lower carbon future. This app helps bp to make a real ‘quantum leap’ in communicating with and engaging our contractors.",
        category: "React Native",
        android_link: "https://play.google.com/store/apps/details?id=com.obcc.notify&hl=en&gl=US",
        ios_link: "https://apps.apple.com/do/app/woc-rapidinfo/id1546063488"
    },
    {
        image: reactnative_bpccs,
        gif: reactnative_bpccs_gif,
        title: "bp CCS",
        description: "bp delivers heat, light and mobility products and services to people all around the world in ways that will help to drive the transition to a lower carbon future. We have a diverse portfolio across businesses, resource types and geographies. Having upstream, downstream and renewables businesses, along with well-established trading capabilities, helps to mitigate the impact of commodity pricing cycles. Our geographic reach gives us access to growing markets and new resources, as well as diversifying exposure to geopolitical events. The bp Contractor Communication & Safety App is a digital solution and has been designed to focus on and improve communication and safety purposes for Refining and European Retail Contractors. This app helps bp to make a real ‘quantum leap’ in communicating with and engaging our contractors.",
        category: "React Native",
        android_link: "https://play.google.com/store/apps/details?id=com.bp.ccs&hl=en&gl=US",
        ios_link: "https://apps.apple.com/de/app/bp-ccs/id1534882717"
    },
    {
        image: reactnative_eticket,
        gif: reactnative_eticket_gif,
        title: "eTicket",
        description: '<p>It is a simple application that has a list of tickets. It is just a dummy application for demonstrating react native. Expo is used to develop the application. It covers implementation of:</p>'
        +'<p>Stack Navigation</p>'
        +'<p>Drawer Navigation</p>'
        +'<p>svg</p>'
        +'<p>QR code</p>'
        +'<p>Simple animation</p>'
        +'<p>Image</p>'
        +'<p>Redux</p>'
        +'<p>Icon</p>'
        +'<p>Here you can see implementation of: Conditional rendering of components Passing properties to child components</p>'
        +'<p><strong>Navigation of the application is like bellow:</strong></p>'
        +'<ul>'
        +'<li>Stack.Navigator (initalScreen = Login)'
        +'<ul>'
        +'<li>Login(Screen)</li>'
        +'<li>DrawerNavigator (initalScreen = TicketStack)'
        +'<ul>'
        +'<li>TicketStack(Stack.Navigator, initalScreen=TicketList)'
        +'<ul>'
        +'<li>TicketList (Screen)</li>'
        +'<li>TicketDetail (Screen)</li>'
        +'</ul>'
        +'</li>'
        +'<li>BuyTicket (DrawerItem)</li>'
        +'<li>AboutUs (DrawerItem)</li>'
        +'<li>Setting (DrawerItem)</li>'
        +'<li>Logout (DrawerItem)</li>'
        +'</ul>'
        +'</li>'
        +'</ul>'
        +'</li>'
        +'</ul>'
        +'<p>When the application initializes it renders the first stack navigator whose initial screen is&nbsp;<strong>Login</strong>&nbsp;so, the login screen will be rendered first. When the login button is clicked then it navigates to&nbsp;<strong>DrawerNavigator.</strong>&nbsp;DrawerNavigator has an initial screen TicketStack which is basically not a screen but another stack navigator. So, from that stack navigator the initial screen will be rendered when the login button is clicked which is&nbsp;<strong>TicketList</strong>.</p>'
        +'<p><strong>Packages used</strong></p>'
        +'<ul>'
        +'<li>React-navigation packages for navigation</li>'
        +'<li>React-native-svg for svg</li>'
        +'<li>React-natve-qrcode-svg for QR code</li>'
        +'<li>React-redux for redux</li>'
        +'<li>React-native-gesture-handler for ScrollView</li>'
        +'<li>React-native-elements for some UI components</li>'
        +'</ul>',
        category: "React Native"
    },
    {
        image: reactnative_meetup,
        gif: reactnative_meetup_gif,
        title: "Meet up",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose.",
        category: "React Native"
    }         
]

export const flutterWork=[
    {
        image: flutter_epayment,
        gif: flutter_epayment_gif,
        title: "ePayment",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose.",
        category: "Flutter"
    },
    {
        image: flutter_vaccation,
        gif: flutter_vaccation_gif,
        title: "Vaccation",
        description: "this is testing application description for testing purpose. this is testing application description for testing purpose.",
        category: "Flutter"
    },
    {
        image: flutter_eticket,
        gif: flutter_epayment_gif,
        title: "eTicket",
        description: '<p>It is a simple application that has a list of tickets. It is just a dummy application for demonstrating Flutter. It covers implementation of:</p>'
        +'<p>Scaffold widget</p>'
        +'<p>Drawer Navigation</p>'
        +'<p>CustomPainter Widgets for graphics</p>'
        +'<p>QR code</p>'
        +'<p>Simple animation</p>'
        +'<p>BLOC design pattern</p>'
        +'<p>Icons</p>'
        +'<p>Custom Widgets</p>'
        +'<p>Custom icons</p>'
        +'<p><strong>Packages used</strong></p>'
        +'<ul>'
        +'<li>qr_flutter: 3.1.0</li>'
        +'<li>rxdart: 0.23.1</li>'
        +'</ul>',
        category: "Flutter"
    }         
]

export const xamarinformWork=[
    {
        image: xamarinform_eticket,
        title: "eTicket",
        description: '<p>It is a simple application that has a list of tickets. It is just a dummy application for demonstrating Xamarin.Form. It covers implementation of:</p>'
        +'<p>MasterDetail Page</p>'
        +'<p>SkiaSharp for graphic</p>'
        +'<p>QR code</p>'
        +'<p>Simple animation</p>'
        +'<p>MVVM</p>'
        +'<p>Material icons</p>'
        +'<p>CustomControls using Custom Renderer</p>'
        +'<p>DataTemplateSelector</p>'
        +'<p>Behaviors</p>'
        +'<p>Converters</p>'
        +'<p><strong>Packages used</strong></p>'
        +'<ul>'
        +'<li>Newonsoft.Json</li>'
        +'<li>PropertyChanged.Fody</li>'
        +'<li>QRCoder</li>'
        +'<li>Rg.Plugins.Popup</li>'
        +'<li>SkiaSharp</li>'
        +'<li>Xamarin.Forms.PancakeView</li>'
        +'</ul>',
        category: "Xamarin.Form"
    },
    {
        image: xamarinform_login,
        title: "Responsive Login Form",
        description: '<p>Making page responsive in xamarin form is not that difficult. Detecting device and its orientation is the inital part and applying the changes for responsiveness is done from the code behind. A simple registration form is given here and screenshot of both landscape and potrait is given here in both android phone and tablet.</p>'
        +'<h3>Used Plugins</h3>'
        +'<ul>'
        +'<li>SkiaSharp (used to get gradiant, dotted circles and curves)</li>'
        +'<li>LeoJHarris.XForms.Plugins.EnhancedEntry (For advanced entry control)</li>'
        +'</ul>',
        category: "Xamarin.Form"
    },
    {
        image: xamarinform_registration,
        title: "Responsive Registration Form",
        description: "Making page responsive in xamarin form is not that difficult. Detecting device and its orientation is the inital part and applying the changes for responsiveness is done from the code behind. A simple registration form is given here and screenshot of both landscape and potrait is given here in both android phone and tablet.",
        category: "Xamarin.Form"
    }          
]