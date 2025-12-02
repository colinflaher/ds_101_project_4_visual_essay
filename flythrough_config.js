// OpenStreetMap-based Flythrough Configuration
// No API tokens required - uses free OpenStreetMap tiles via Leaflet

var config = {
    // =============================================================================
    // MAP STYLE SETTINGS
    // To change style: comment out current tileLayer and uncomment your choice
    // =============================================================================
    
    // Positron Light (clean minimal style, perfect for data visualization)
    tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    
    // Dark Positron (dark theme)
    // tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    
    // Standard OpenStreetMap (classic map style)
    // tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    
    // Terrain (topographic map)
    // tileLayer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    
    // =============================================================================
    // COLOR SCALE SETTINGS (Choose one - Plotly inspired)
    // =============================================================================
    
    colorScale: 'RdYlGn',  // Options: 'RdYlGn' (Red-Yellow-Green) or 'Portland' (Blue-White-Red)
    
    // =============================================================================
    // STORY CHAPTERS
    // Students: Fill in with your data
    // - Coordinates: Get from your CSV file (latitude, longitude columns)
    // - Post counts & sentiment scores: Look up in your whitepaper visualizations
    // =============================================================================
    
    chapters: [
        {
            // CHAPTER 1: Overview of both locations
            id: 'intro',
            title: 'Reddit Sentiment Analysis: Two College Towns',
            description: 'Exploring how students discuss their campuses on Reddit - comparing JMU in Harrisonburg, VA and VCU in Richmond, VA.',
            image: './images/intro_jmu.jpg',
            duration: 3000,
            
            // Camera position (where to fly)
            camera: {
                latitude: 37.2,             // Midpoint between JMU and UNC
                longitude: -78.0,
                zoom: 8                     // Wide view showing both locations
            },
            
            showData: 'all_locations'       // Show all locations from both schools
        },
        
        {
            // CHAPTER 2: JMU Campus Overview
            id: 'jmu-campus',
            title: 'JMU Campus Overview',
            description: 'James Madison University in Harrisonburg, Virginia. Three key locations emerge from student discussions.',
            image: './images/chapter_1_jmu_campus.jpg',
            duration: 2500,
            
            // Camera position
            camera: {
                latitude: 38.4365,
                longitude: -78.8705,
                zoom: 14
            },
            
            showData: 'jmu_locations'       // Show only JMU locations
        },
        
        {
            // CHAPTER 3: JMU Location 1
            id: 'jmu-location-1',
            title: 'JMU Location 1: The Quad',
            description: '15, avg 0.260. Very social spot on JMU campus. This is where all bluestone buildings are located which includes class halls and dorm halls. Students come to the quad frequently whether it is for class or a social event. Students talk about the quad a lot due to how prevalent it is and how social it can be.',
            image: './images/chapter_2_jmu_quad.jpg',
            duration: 2000,
            
            // Camera position
            camera: {
                latitude: 38.4385,           // Replace with coordinates from CSV
                longitude: -78.8738,
                zoom: 17
            },
            
            // Location data (creates the marker on map)
            location: {
                name: 'JMU Location 1',      // Replace with location name from CSV
                latitude: 38.4385,           // Must match camera coordinates
                longitude: -78.8738,
                postCount: 15,               // Look up in your whitepaper visualizations
                robertaScore: 0.260,          // Look up in your whitepaper visualizations
                isJMU: true
            },
            
            showData: 'individual'           // Highlight only this location
        },
        
        {
            // CHAPTER 4: JMU Location 2
            id: 'jmu-location-2',
            title: 'JMU Location 2: Village Dorms',
            description: '16, avg 0.080, Popular first year only student dorms. Very lively and social double occupancy 3 room suite style dorms. Very fun for freshman due to the social aspect and lively atmosphere.',
            image: './images/chapter_3_jmu_dorm.jpg',
            duration: 2000,
            
            camera: {
                latitude: 38.4362,
                longitude: -78.8691,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 2',
                latitude: 38.4362,
                longitude: -78.8691,
                postCount: 16,
                robertaScore: 0.080,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 5: JMU Location 3
            id: 'jmu-location-3',
            title: 'JMU Location 3: Harrisonburg City',
            description: '295, avg -0.024. A small city located right near JMUs campus. Places for people to eat, shop, explore, and hangout. Right near JMUs campus and is easily accessible for students to walk around to. ',
            image: './images/chapter_4_jmu_harrison.jpg',
            duration: 2000,
            
            camera: {
                latitude: 38.4469,
                longitude: -78.8642,
                zoom: 20
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4390,
                longitude: -78.8620,
                postCount: 295,
                robertaScore: -0.024,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 6: UNC Campus Overview
            id: 'vcu-campus',
            title: 'VCU Campus Overview',
            description: 'Virginia Commonwealth University. Three key locations emerge from student discussions.',
            image: './images/chapter_5_vcu_overview.jpg',
            duration: 2500,
            
            camera: {
                latitude: 37.54677,
                longitude: -77.20,
                zoom: 9
            },
            
            showData: 'non_jmu_locations'    // Show only UNC locations
        },
        
        {
            // CHAPTER 7: UNC Location 1
            id: 'VCU-location-1',
            title: 'VCU Location 1: Monroe Park ',
            description: '39, Average sentiment of Monroe park is -0.096. Park in VCUs main campus that students use to hangout, study, socialize, and eat. Its open for residential use of students and commercial use of the surrounding Richmond population. Its located right in the middle of VCU where numerous people hang out.',
            image: './images/chapter_6_vcu_monroe.jpg',
            duration: 2000,
            
            camera: {
                latitude: 37.54677,
                longitude: -77.45054,
                zoom: 17
            },
            
            location: {
                name: 'VCU Location 1',
                latitude: 37.54677,
                longitude: -77.45054,
                postCount: 46,
                robertaScore: -0.088,
                isJMU: false                 // UNC location
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 8: UNC Location 2
            id: 'vcu-location-2',
            title: 'VCU Location 2: Richmond',
            description: '138, avg -0.006. The location of which VCU is located in. Richmond is a very populated and diverse city with a dense population. Historic city with lots of different locations and it is very popular for tourism due to its historic value, culture, food, nightlife, and outdoor activities. There is a lot of activity that goes on throughout Richmond due to the amount of commercialism.',
            image: './images/chapter_7_vcu_city.jpg',
            duration: 2000,
            
            camera: {
                latitude: 37.5407,
                longitude: -77.4281,
                zoom: 17
            },
            
            location: {
                name: 'VCU Location 2',
                latitude: 37.5407,
                longitude: -77.4281,
                postCount: 160,
                robertaScore: 0.048,
                isJMU: false
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 9: UNC Location 3
            id: 'vcu-location-3',
            title: 'VCU Location 3: GRC ',
            description: 'Largest student dormitory in Virginia. 12 story dormitory that houses primarily first year students. Contains amenities such as a 24/7 fitness center, study lounge, mail room, a theatre, and is right next to Monroe Park. It is very crowded and not the most ideal place for first years and upper classmen to live.',
            image: './images/chapter_8_vcu_grc.jpg',
            duration: 2000,
            
            camera: {
                latitude: 37.5457,
                longitude: -77.4511,
                zoom: 17
            },
            
            location: {
                name: 'VCU Location 3',
                latitude: 37.5457,
                longitude: -77.4511,
                postCount: 55,
                robertaScore: 0.321,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 10: Final zoom out
            id: 'conclusion',
            title: 'Conclusion: Comparing Campus Sentiment',
            description: 'Our analysis reveals very different experiences of students due to locations of each university. VCUs campus and surrounding area is very commercial compared to JMU. Due to that, there is a lot more exposure to crime since the population seen at VCU is not primarily just the student body.',
            image: './images/conclusion_vcu (1).jpg',
            duration: 3000,
            
            camera: {
                latitude: 37.2,
                longitude: -78.0,
                zoom: 8
            },
            
            showData: 'all_locations'
        }
    ]
};
