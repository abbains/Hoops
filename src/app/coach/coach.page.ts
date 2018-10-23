import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CoachDescriptionService} from '../coach-description.service';

@Component({
    selector: 'app-coach',
    templateUrl: './coach.page.html',
    styleUrls: ['./coach.page.scss'],
})
export class CoachPage implements OnInit {

    public coach = {
        heading: 'Our Amaazing Coaches',
        subheading: 'Our team of experienced coaches are passionate about inspiring confidence in young basketball players.',
        coaching: [
            {
                img: 'https://static.wixstatic.com/media/ca7d68_38827d0bc56647d8b62f3655e85622e5~mv2.jpg/v1/fill/w_108,h_157,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_38827d0bc56647d8b62f3655e85622e5~mv2.webp',
                name: 'Alex Hariz',
                description: 'Alex is the co-founder of HoopSphere. He has been intensely training for most of his life and understands what it takes to continually grow as an individual and team basketball player both mentally and physically. Alex attended Mission San Jose High School in Fremont, CA where he was team MVP and was part of the 1st team All Conference in the region. He went on to play starting guard for TCI College in New York City where he averaged 14 points and 5 assists per game. Alex is a graduate from University of California, Berkeley as an Economics major.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_0841d49ba24a44aa94acee65dcda2134~mv2.jpg/v1/fill/w_142,h_140,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_0841d49ba24a44aa94acee65dcda2134~mv2.webp',
                name: 'Venkat Narasimhan',
                description: 'Venkat (Coach V) is the co-founder of HoopSphere. His passion lies in helping students reach their athletic goals. He believes every player on the court should have the necessary skill-set to be a scoring threat, but V constantly stresses the importance of team play. He competed for TCI College in New York City where he led the team in assists and was rated one of the top point guards in the college conference. Following his graduation at University of California, Davis, V spent time playing and exploring international basketball in Singapore and India.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_1f35ad245788406b9777ba045b4b2f2c~mv2.jpg/v1/crop/x_7,y_7,w_137,h_137/fill/w_143,h_140,al_c,lg_1,q_80/ca7d68_1f35ad245788406b9777ba045b4b2f2c~mv2.webp',
                name: 'Coach DeAngelo',
                description: 'Coach DeAngelo (Coach D) inspires his students by making basketball a fun and confidence building experience. His passion for the game is infectious and rubs off on his students in every class. Coach D inspires his students to be great teammates and give their best at all times. Prior to coaching at HoopSphere, he was a two sport (basketball and football) star player at American High School in Fremont. Coach D played Varsity basketball for the Eagles all four years. He is a Communications major and aspires to play Division 1 basketball for the San Jose State Spartans.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_9662e6f28c3f4f5bb32928764c853a66~mv2.jpg/v1/crop/x_0,y_0,w_149,h_149/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_9662e6f28c3f4f5bb32928764c853a66~mv2.webp',
                name: 'Coach Steve',
                description: 'Knowledgeable, patient, caring. These are few of the many words that can be used to describe Coach Steve. He is nurturing while always bringing out the best in his students. Coach Steve strives to make every student a better skilled player and a more confident person. He has been playing and coaching basketball his entire life. Steve was a standout 4 year varsity player at Milpitas High School, earning all mercury news and establishing himself as one of the best players in the Bay Area. He went on to play NCAA Division 1 basketball for Wagner College in Staten Island, New York City.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_37ab2532220842c79284ebd2a850f2fd~mv2.jpg/v1/crop/x_0,y_2,w_147,h_147/fill/w_140,h_140,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_37ab2532220842c79284ebd2a850f2fd~mv2.webp',
                name: 'Coach Williams',
                description: 'Coach Williams breathes basketball inspiration. He is a high quality skills trainer and motivator for students of all ages. Coach Williams works to inspire love and confidence within all the players he comes across. He was born and raised in Houston, Texas and played college basketball in the Bay Area. Coach Williams played for the City College of San Francisco and was a key performer for their team as a point guard and shooting guard.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_aafb57c14b28458ca04cdb661a32ee77~mv2.jpg/v1/fill/w_141,h_141,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_aafb57c14b28458ca04cdb661a32ee77~mv2.webp',
                name: 'Coach Palm',
                description: 'Coach Palm is a graduate of Newark Memorial High School and Cal State East Bay where he played basketball at the college level for the Pioneers all four years. He was a two way success, on the court as well as academically where he majored in business. Coach Palm as he is fondly known by his players and fellow coaches, is inspirational and pushes each of his students to be the best they can be on and off the court. Versatile and communicative, Coach Palm connects to students of all levels and age groups.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_2bccab071d044f44883b99f399f1d112~mv2.jpg/v1/fill/w_143,h_143,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_2bccab071d044f44883b99f399f1d112~mv2.webp',
                name: 'Coach Tahir',
                description: 'Coach Tahir comes to HoopSphere with a wealth of basketball knowledge. He has served as a professional basketball scout evaluating college basketball players for the past few years. There is nothing that Coach T enjoys more than connecting to youth basketball players and sharing his knowledge and skills. He is very encouraging, motivational, and is passionate about youth skill development. Coach T is exceptionally academically accomplished, having graduated with a BS degree from Cornell University. He is a Los Angeles native.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_79a443fefb9449b6a9cd20db11ffe6d7~mv2.jpg/v1/fill/w_140,h_145,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_79a443fefb9449b6a9cd20db11ffe6d7~mv2.webp',
                name: 'Coach Ashton',
                description: 'Caring, personable, and knowledgeable are some of the many adjectives that come to mind  when describing Coach Ashton. His warm and genuine personality make it easy for any child to connect and learn from him. Coach Ashton was a successful player for Kennedy High School in Fremont earning all-league honors before playing basketball at the college level for the San Jose City College Jaguars.  He prides himself in being able to transmit his love for the game onto the students he teaches.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_d0b9cfa8a6e144ba9138202813cf2963~mv2.png/v1/fill/w_113,h_152,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_d0b9cfa8a6e144ba9138202813cf2963~mv2.webp',
                name: 'Coach Justin',
                description: 'Coach Justin is very passionate and caring with his teaching approach. He truly cares about each and every one of his students and wants them to succeed on and off the court. Coach Justin prides himself in being a student of the game. You can see this in his high-quality teaching and creative drills. Coach Justin played basketball all four years at Newark Memorial High School. He is currently a student at San Jose State University, majoring in Industrial Engineering with a minor in Business.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_4b56b71848724588bae03871b6cb5479~mv2.jpg/v1/fill/w_156,h_156,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_4b56b71848724588bae03871b6cb5479~mv2.webp',
                name: 'Coach Carlos',
                description: 'Coach Carlos is an accomplished basketball player with 15 years of professional basketball experience, spanning over 24 professional teams all over the world. He is originally from the Dominican Republic and has played for their national team. As a coach, Carlos is highly enthousiastic about guiding the next generation of athletes to success. His knowledge of youth basketball development coupled with his care for seeing young people succeed makes him an amazing mentor and coach for HoopSphere students. Fun Fact: Coach Carlos was high school teammates with current NBA player JJ Barea'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_377a8f2acbee467294e15749add2257d~mv2.jpg/v1/fill/w_153,h_153,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_377a8f2acbee467294e15749add2257d~mv2.webp',
                name: 'Coach Jack',
                description: 'As a former collegiate athlete playing in the NCAA, Coach Jack brings a unique perception of the game. His students love the enthusiasm and fun that he brings to every class. Coach Jack hails from the state of Georgia and played basketball for Seattle University.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_3f43d2cb6a4043ce8a39aa1541edf90b~mv2.jpg/v1/fill/w_125,h_152,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_3f43d2cb6a4043ce8a39aa1541edf90b~mv2.webp',
                name: 'Coach Joshua',
                description: 'Coach Joshua has had a strong passion for basketball since a very young age. He is a great all around player, especially known for his defense. Coach Joshua was named 1st Team All League Defense in High School. While playing basketball is his passion, he truly fell in love with coaching because it allows him to share his love to countless kids in the community. Dedication, hard work and fun are the core elements that Coach Joshua strives to teach his students.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_dbf1ef0fc68242fabb4c47a54fc7c0bf~mv2.jpeg/v1/fill/w_75,h_153,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_dbf1ef0fc68242fabb4c47a54fc7c0bf~mv2.webp',
                name: 'Coach Isaiah',
                description: 'Coach Isaiah is highly motivated by continuous improvements in his students. He has a strong work ethic and sets high standards for all the students that he coaches. Coach Isaiah\'s genuine love for the game creates a great learning atmosphere. Originally from Inglewood, CA, he played 4 years of basketball at Inglewood High School, then decided to pursue his BA at San Jose State University.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_7fedcdf7e7fe43068f075c46c178fd4b~mv2.jpg/v1/fill/w_156,h_141,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_7fedcdf7e7fe43068f075c46c178fd4b~mv2.webp',
                name: 'Coach Siyar',
                description: 'Coach Siyar is a recent graduate of Kennedy High School in Fremont, CA where he played basketball for all four years. His number one goal is to inspire his students to love the game and for this love to continue to grow throughout their playing careers. Coach Siyar is passionate about working on his own game and understands the struggle and effort that goes into getting better. He is very excited to teach and share his growing basketball knowledge with all of his students.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_a3263cb7133044e782ba555dad5c129b~mv2.jpg/v1/fill/w_134,h_153,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_a3263cb7133044e782ba555dad5c129b~mv2.webp',
                name: 'Coach Gordon',
                description: 'Coach Gordon is a rising high school junior at Mission San Jose High School. He will be working with our younger students and is very excited about helping them discover the same love of basketball that he did at HoopSphere. He has been a  HoopSphere student since he was a sixth grader. He is extremely knowledgeable about the game and was always one of HoopSphere\'s top performers and hardest workers.'
            },
            {
                img: 'https://static.wixstatic.com/media/ca7d68_57ed26ad29f7431281d142ad1cc938e9~mv2.jpg/v1/fill/w_115,h_161,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_57ed26ad29f7431281d142ad1cc938e9~mv2.webp',
                name: 'Coach Christian',
                description: 'Coach Christian is a highly accomplished and gifted young coach with an extensive athletic background. He has a motivating personality and is a skilled teacher. Coach Christian played college basketball for UC Merced and currently plays professionally for the ABA\'s Oakland Bayhawks.  He is originially from Hayward, CA and currently is a student at Cal State East Bay'
            }]
    };

    constructor(private navCtrl: NavController, private router: Router, private coachBucket: CoachDescriptionService) {
    }

    ngOnInit() {
    }

    coaches(value): void {
        this.coachBucket.coachBucket(value);
        this.router.navigateByUrl('/coachDescription');
    }


}
