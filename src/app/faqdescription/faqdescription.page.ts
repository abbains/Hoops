import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-faqdescription',
    templateUrl: './faqdescription.page.html',
    styleUrls: ['./faqdescription.page.scss'],
})
export class FaqdescriptionPage implements OnInit {
    faqdescription = {
        Programs: [
            {
                question: 'What programs do you offer? How does registration work?',
                answer: 'HoopSphere\'s comprehensive year round program covers all major components of becoming a better basketball player. Skills Training, The HoopSphere League, AAU (Travel Team). For details about our program, click here. To register or see the schedule for your child\'s age and level, click here. You will first select your weekly skills classes (up to 6 per week). At least one skills class selection is mandatory for all students. Then, you will select your league timing. Your child will be grouped in the appropriate classes and league divisions for their age group and skill level.'
            }, {
                question: 'Can I join anytime?',
                answer: 'HoopSphere is a year round program. Students can join at any time of the year.'
            }, {
                question: 'Do you offer programs for boys and girls? Do you have classes for all age groups and skill levels? ',
                answer: 'Yes, we offer programs for boys and girls and for all skill levels. HoopSphere students range from players who are just starting to learn the game to advanced, competitive players. Students will be grouped in the right program according to their age and skill level.'

            }, {
                question: 'What program do you recommend for my son/daughter? ',
                answer: 'We always recommend: 1) Skills Classes. Anywhere from 1-3 Skills Development classes per week to learn/improve technique. 2) The HoopSphere League. -Every student will be placed in the appropriate division relative to age and skill level. -Learn the team concept and playing organized basketball under a professional coach.-Gain real game experience, understand teamwork, communication, and sacrifice.Both skills classes and league play are necessary ingredients to get the complete experience needed for every young basketball player to develop'
            }, {
                question: 'What do I need to bring to my first class and every class/practice?',
                answer: 'What is the appropriate attire for class/practice?Things to bring to every class/practice: 1). Your own basketball with your full name written on it (please see chart at the bottom of this page with basketball size details). Please do not bring your basketball on league game days or instructional game days. Only bring your basketball to practices and skills classes. 2). A notebook and pen. This will serve as your homework and progress journal. 3). Water bottle (if not disposable, please write your full name on it). 4). An inhaler or any other medical related devices if applicable to you. Appropriate attire: 1). Wearing comfortable athletic clothing such as shorts, tee shirts, sweats, sweatshirts. 2). Wearing athletic shoes, preferably basketball shoes. No open toe sandals allowed. Running shoes are not recommended because of minimal ankle protection. Please purchase the appropriate size basketball based on chart below. Boys Ages 5-6, Size 27. Ages 7-10, Size 28.5. Ages 11 and Up: Size 29.5. Girls: Ages 5-7: Size 27.5. Ages 8 and Up: Size 28.5.'
            }, {
                question: 'Does your program offer a curriculum?',
                answer: 'Our program is curriculum based. We follow an order of operations covering basic skills first and then moving on to more advanced skills while often revisiting the basic skills. Every month, we work on a different “main focus skill” while also having sub-focuses. For example, ball handling will be a main focus with topics such as passing and shooting as sub focuses. The emphasis is to better one skill at a time (in detail) while continuing to polish other skills. We will also employ a practice scrimmage game to see how players incorporate their skills into games.'
            }, {
                question: 'How do you monitor the progress of each student?',
                answer: 'Our primary goal is for every student to have a great time while playing basketball. Any student that is not having fun will not improve. Our secondary goal is the improvement of our students. The progress of each student is tracked by their skills coach. The skills coaches design workouts based on our curriculum and also based on where their students need improvement. We frequently hold round-table meetings to discuss each of our students and their trajectories. We may at times ask that a student moves to a more advanced class/program depending on their progress. Our coaching staff is not only discerning in helping our students improve their abilities, but take an active role in inspiring them to love the game.'
            }, {
                question: 'Are classes grouped by age or skill level?',
                answer: 'Classes are grouped by both age and skill-set. However, parity in skill-set is more important as it allows the coach to make the right decisions on which training methods and drills to use in a particular class. In most cases, most students around a similar age all fit into the same group.'
            }, {
                question: 'Do you offer a trial class?',
                answer: 'All students must be fully registered prior to participation. However, each student\'s signup is considered a risk-free signup. Essentially, if the student did not feel that the program is for them, then we will provide a 100% refund of any fees paid and the class is on us. This refund only applies if an email is sent to training@hoopsphere.com on the same day as the student\'s first class. If an email is not sent on the same day as the student\'s first class, the risk free trial will not apply and student must abide by our 30 day cancellation policy.'
            }
        ],
        league: [{
            question: 'How does the league work?',
            answer: 'Players are all placed on a league team in a league division that is based on their age and skill level/experience. We have divisions for all age groups and all skill levels. There are six to ten teams in each division which play against each other at various times throughout the season. Playoffs/Finals/Team and Individual Awards at the end of the season. There is a slightly more competitive A league and a more developmental B league. The A league is for players who are more experienced with competitive basketball. B league is for players who we feel can use more development or who are newer to the sport. Both divisions are great to learn and become a better player. We may at times move a player to a different team or division if the coaching staff feels it is best for the student. On any given Sunday, teams may have a practice or an actual game (depending on the league schedule). The emphasis of the League is having a great time while learning. The League features a mid season All Star Game'
        }, {
            question: 'What is a skills class? What is the difference between a skills class and the league?',
            answer: 'Skills classes are focused on skill development which encompasses footwork, ball handling, shooting ability and more. The emphasis is on building a solid foundation of fundamentals. This type of development is crucial to young players as it improves confidence, technique and mentality. A more skilled player is a more confident player. The league is dedicated to learning about team play and playing in games. This will involve strategy, team camaraderie, and competition. We have observed that playing in the league usually motivates students to work harder in their skills classes. A combination of skills classes and the league are what we recommend for most students as it offers exposure and experience to both developing their individual and team skills.'
        }, {
            question: 'My child is a beginner. Do you recommend he/she joins the league?',
            answer: 'Since our league has many divisions to cover all age groups and all skill levels within each age group, we almost always recommend the league. However, if a young student has not gained the strength to pass, catch, and make a shot on a 10 foot basket, we suggest joining the skills program until his/her strength improves.'
        }],
        tuition: [{
            question: 'What is the monthly tuition?',
            answer: 'Skills Class: -$119 per month if you choose 1 skills class per week. -$90 per month for each additional skills class.-Every student in the program is required at least one skills class per week. The HoopSphere League:-$100 per month. -There will be a one time cost to cover the cost of the league uniform.'
        }, {
            question: 'What forms of payment do you accept and how is tuition processed?',
            answer: 'We accept all forms of credit card payments. If you wish to use your bank account, you can process payment with your debit card. We do not accept cash or checks. We require all tuition to be paid on an automatic debit monthly basis. After you submit your first month’s payment, the payment source you used will be debited the monthly tuition amount on the 1st of every following month. Your first\'s month\'s tuition will be prorated based on your start date if you are not starting at the beginning of the month.'
        }, {
            question: 'If I am starting the program mid-month, can you prorate tuition?',
            answer: 'Yes. Your first month\'s tuition will automatically be prorated based on your start date.'
        }, {
            question: 'Are there any additional sign-up fees?',
            answer: 'There are no additional sign up fees. When a student registers, the initial fee covers only the first month’s tuition. For League and Instructional Game enrollment, there is a one time charge to cover the cost of the game Uniform. For students enrolled in both, you can choose to use the same uniform so you will not be charged twice.'
        }, {
            question: 'How is the monthly tuition derived? Why is it fixed throughout the year (even through Holidays)?',
            answer: 'The monthly membership cost of each program is based on seasonal cost of the program divided by months in the season (our Holiday Schedule has been accounted for into this calculation). The monthly tuition is not based on sessions in the month. A few months have 3 weeks (due to Holidays), some months have 5 weeks and the tuition will remain fixed. Most months will have 4 weeks of classes/practices/games.'
        }],
        studentAndParents: [{
            question: 'What are the expectations of each student outside of class?',
            answer: 'We expect students to consistently practice what they learn in class on their own time. In class time will be mainly for learning new skills/techniques and refining existing skills/techniques. Even after “acquiring” a basketball skill, i.e., shooting, dribbling, passing, it takes hours of practice to maintain, sharpen and even better that skill. Most skills take years of ongoing practice to master. We provide the fundamentals, techniques, and corrections in class practice; however, a player cannot truly succeed at high levels without practicing these skills on their own outside of class regularly.'
        }, {
            question: 'What are parent expectations during league games and skills classes/practices?',
            answer: {
                heading: 'Parental Code of Conduct for League Games:',
                subheading: 'In order to foster a safe and positive playing environment for our students, we require parents/spectators to follow our guidelines:',
                points: {
                    point1: 'Parents and spectators are required to sit or stand in assigned seating area. Please do not sit or stand near the team bench or on the team bench. This area is reserved for players only.',
                    point2: 'Please DO NOT provide your child with coaching/tips either from the sideline or during the game/practice session. This time is reserved for your child to interact and learn from their coach only. This can be distracting, disruptive and can often interfere with coach’s efforts and expectations.',
                    point3: 'Understand that the purpose of our League is NOT about winning vs. losing. Be positive no matter the outcome. These games serve as tremendous learning opportunities to build student character through teamwork, communication, and effort. Let us not lose sight of this',
                    point4: 'Encourage and support all players who are playing, not just your child. It makes for a great atmosphere and every kid feels supported.',
                    point5: 'Please do not to raise your voice. If you do, it should only be words of encouragement.',
                    point6: 'Spectators/Parents please do not communicate with the referees in anyway whatsoever.',
                    point7: 'Please do not ask questions to coaches on game day unless it is urgent. We want to spend our practice or game time developing our players. If you have questions related to scheduling, training, improvement, please call or send us an email and we will be happy to answer your questions.',
                    point8: '24-hour rule: Please Do Not approach coaches or any HoopSphere staff members during game day. If you have a concern, please send us an email 24 hours after the game is complete. The 24-Hour Rule is a good way for parents to take a breath and decide whether their concern really is a matter of fairness or an intense emotional reaction forged in the heat of competition.',
                    point9: 'Enjoy the game! Nothing is more important than our young players having fun out there on the court.'
                },
                subheading1: 'Parental Code of Conduct for Skills Classes or League Practices:',
                points2: {
                    point1: 'It is not recommended for parents to attend and observe the skills training classes. We wish to create an open and judgment-free learning environment for students. However, we do encourage parents and spectators to attend the Sunday league games.',
                    point2: 'Please do not provide your child with coaching/tips from the sideline during the class. This time is reserved for your child to interact and learn from their coach only. Additional commentary can be distracting and disruptive, and it can often interfere with coach’s efforts and expectations of the student.',
                    point3: 'Please do not video record during skills training class.',
                    point4: 'Please promptly pick up your child at the end of each session. It is helpful to have the students off the court at the end of the class so it does not delay the following class.',
                    point5: 'Coaches are very busy during skills training classes. We want to spend our class time developing our students. If you have any questions related to scheduling, training, improvement, etc., please send us an email or give us a call and we will be happy to answer your questions'
                }
            }
        }]
    };

    constructor() {
    }

    ngOnInit() {
    }

}
