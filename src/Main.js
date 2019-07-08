import React from 'react';
import Genre from './Genre';
import Showfilms from './Showfilms';
import Playlist from './Playlist';

class Main extends React.Component{
    state = {
        comedy: [
            {
                name: "Comedy of manners:",
                desc: " A film which satirizes the manners and affectations of a social class, often represented by stock characters. The plot of the comedy is often concerned with an illicit love affair or some other scandal, but is generally less important than its witty dialogue. This form of comedy has a long ancestry, dating back at least as far as Shakespeare's Much Ado about Nothing.",
                rat: 5,
                x: 0
            },
            {
                name: "Tall tale:",
                desc: "A humorous story with blatant exaggeration, swaggering heroes who do the impossible with nonchalance.",
                rat: 5,
                x: 0
            },
            {
                name: "Parody",
                desc: " A story that mocks or satirizes other genres, people, fictional characters or works. Such works employ sarcasm, stereotyping, mockery of scenes, symbols or lines from other works, and the obviousness of meaning in a character's actions. ",
                rat: 5,
                x: 0
            },
            {
                name: "Comic fantasy:",
                desc: "A subgenre of fantasy that is primarily humorous in intent and tone. Usually set in imaginary worlds, comic fantasy often includes puns on and parodies of other works of fantasy.",
                rat: 5,
                x: 0
            },
            {
                name: "Zombie comedy: ",
                desc: " Often called zom com or zomedy, this is a genre that blends zombie horror motifs with slapstick comedy as well as dark comedy.",
                rat: 5,
                x: 0
            }
        ],
        horror: [
            {
                name: "Vampire literature: ",
                desc: "A story about vampires, reanimated bodies that feed on the blood of the living, based on European folklore. Bram Stoker's Dracula created many of the genre's conventions.",
                rat: 5,
                x: 0
            },
            {
                name: "Occult stories:",
                desc: "Stories that touch upon the adversaries of Good, especially the Enemies of the forces of righteousness as expressed in any given religious philosophy. Hence, stories of devils, demons, demonic possession, dark witchcraft, evil sorcerers or warlocks, and figures like the Antichrist would qualify. The nature of such stories presupposes the existence of the side of Good and the existence of a deity to be opposed to the forces of Evil.",
                rat: 5,
                x: 0
            },
            {
                name: "Slasher: ",
                desc: "A horror genre featuring a serial killer or other psychopath as an antagonist, methodically killing a number of protagonists in succession. Dramatic suspense is heightened by the victims' obliviousness of the killer. The victims are typically in isolated settings and often engaged in sexual activity previous to the attacks. The slasher kills their victims by sneaking up on them and then bloodily stabbing and slicing them to death with a sharp object, such as a chef's knife. Gender roles in slasher films are of particular interest in feminist film theory, which has extensively examined the trope of the Final girl.",
                rat: 5,
                x: 0
            },
            {
                name: "Survival horror: ",
                desc: " A horror story about a protagonist in a risky and life-threatening situation that they must endure, often as a result of things such as zombies or other monsters, and the rest of the plot is how the main characters overcome this.",
                rat: 5,
                x: 0
            },
            {
                name: "Ghost story: ",
                desc: "A story about the intrusion of the spirits of the dead into the realm of the living. There are subgenres: The Traditional Haunting, Poltergeists, The Haunted Place or Object (i.e. the hotel in Stephen King's The Shining), or the etching in M. R. James' The Mezzotint, etc. Some would include stories of Revenants such as W. W. Jacobs' The Monkey's Paw.",
                rat: 5,
                x: 0
            }
        ],
        action: [
            {
                name: "Heroic bloodshed:",
                desc: "Hong Kong action revolving around stylized sequences and dramatic themes such as brotherhood, duty, honor, redemption andviolence.",
                rat: 5,
                x: 0
            },
            {
                name: "Military fiction: ",
                desc: "A story about a war or battle that can either be historical or fictional. It usually follows the events a certain warrior goes through during the battle's events.",
                rat: 5,
                x: 0
            },
            {
                name: "Spy fiction: ",
                desc: "A story about a secret agent (spy) or military personnel member who is sent on an espionage mission. Usually, they are equipped with special gadgets that prove useful during the mission, and they have special training in things such as unarmed combat or computer hacking.",
                rat: 5,
                x: 0
            },
            {
                name: "Wuxia:",
                desc: "A martial arts genre with chivalrous protagonists on fantastic adventures.",
                rat: 5,
                x: 0
            },
            {
                name: "Girls with guns and swords: ",
                desc: "This is a subgenre of action films and animation, often Asian films and anime, that portray a strong female protagonist who makes use of firearms to defend against or attack a group of antagonists. The genre typically involves gun-play, stunts and martial arts action.",
                rat: 5,
                x: 0
            }
        ],
        scific: [
            {
                name: "Military science fiction: ",
                desc: "told from the point of view of the military, or a main character who is a soldier in the military. It usually has technology far superior to today's, but not necessarily implausible. Military science fiction essentially is the addition of science fiction elements into a military fiction story. (Note that some military science fiction stories fit at least somewhat into the hard science fiction subgenre as well.)",
                rat: 5,
                x: 0
            },
            {
                name: "Social science fiction:",
                desc: " concerned less with the scientific background and more with sociological speculation about human society. In other words, it absorbs and discusses anthropology, and speculates about human behavior and interactions. Exploration of fictional societies is one of the most interesting aspects of science fiction, allowing it to perform predictive and precautionary functions, to criticize the contemporary world and to present solutions, to portray alternative societies and to examine the implications of ethical principles.",
                rat: 5,
                x: 0
            },
            {
                name: "Tech noir: ",
                desc: "A hybrid of other works of fiction combining the film noir and science fiction or cyberpunk genres such as seen in Blade Runner (1982) and The Terminator (1984). It is a form of Neo-noir concentrating more on science fiction themes. The term was coined in The Terminator[citation needed] as the name of a nightclub, Tech Noir. The director James Cameron wanted a name for the particular style he was invoking.",
                rat: 5,
                x: 0
            },
            {
                name: "Space Western: ",
                desc: "transposes themes of American Western books and film to a backdrop of futuristic space frontiers; it is the complement of the science fiction Western, which transposes science fiction themes onto an American Western setting.",
                rat: 5,
                x: 0
            },
            {
                name: "Clockpunk: ",
                desc: "This term has occasionally referred to a subgenre of speculative fiction that is similar to steampunk, but deviates in its technology. As with steampunk, it portrays advanced technology based on pre-modern designs, but rather than the steam power of the Industrial Age, the technology used is based on springs, clockwork and similar. Clockpunk is based very intensively on the works of Leonardo da Vinci and as such, it is typically set during the Renaissance. It is regarded as being a type of steampunk.",
                rat: 5,
                x: 0
            }
        ],
        animation: [
            {
                name: "Spirited Away ",
                desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
                rat: 5,
                x: 0
            },
            {
                name: "Zootopia",
                desc: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy.",
                rat: 5,
                x: 0
            },
            {
                name: "Inside Out ",
                desc: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
                rat: 5,
                x: 0
            },
            {
                name: "WALL·E ",
                desc: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
                rat: 5,
                x: 0
            },
            {
                name: "Toy Story 3",
                desc: "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
                rat: 5,
                x: 0
            }
        ],
        films: [],
        playlist: [],
        head: ''
    };
    addfilm  = (film) => {
        if(film.x===0){
            film.x = 1;
            this.setState({playlist: this.state.playlist.concat(film)});
        }else{
            alert('This film is already added');
        }
        
    };
    comedy = () => {
        this.setState({films: this.state.comedy});
        this.setState({head: 'Comedy'});
    };
    horror = () => {
        this.setState({films: this.state.horror});
        this.setState({head: 'horror'});
    };
    action = () => {
        this.setState({films: this.state.action});
        this.setState({head: 'Action'});
    };
    scific = () => {
        this.setState({films: this.state.scific}); 
        this.setState({head: 'Science Fiction'});
    };
    animation = () => {
        this.setState({films: this.state.animation});
        this.setState({head: 'Animation'});
    };
    del = (value, e) => { 
        const playlist = Object.assign([], this.state.playlist);
        playlist.splice(e, 1);
        this.setState({playlist: playlist});
        var y = -1;
        y = this.state.comedy.indexOf(value);
        if(y===-1){
            y = this.state.action.indexOf(value);
            if(y===-1){
                y = this.state.horror.indexOf(value);
                if(y===-1){
                    y = this.state.animation.indexOf(value);
                    if(y===-1){
                        y = this.state.scific.indexOf(value);
                        const scific = Object.assign([], this.state.scific);
                        scific[y].x = 0;
                        this.setState({scific: scific});
                    }else{
                        const animation = Object.assign([], this.state.animation);
                        animation[y].x = 0;
                        this.setState({animation: animation});
                    }
                }else{
                    const horror = Object.assign([], this.state.horror);
                    horror[y].x = 0;
                    this.setState({horror: horror});
                }
            }else{
                const action = Object.assign([], this.state.action);
                action[y].x = 0;
                this.setState({action: action});
            }
        }else{
            const comedy = Object.assign([], this.state.comedy);
            comedy[y].x = 0;
            this.setState({comedy: comedy}); 
        }
    }
    render(){
        return <div className="main">
            <Genre films = {this.state.films} comedy={this.comedy} horror={this.horror}
            action={this.action} scific={this.scific} animation={this.animation}/>
            <Showfilms films = {this.state.films} addfilm = {this.addfilm} 
            playlist={this.state.playlist} head={this.state.head}/>
            <Playlist playlist={this.state.playlist} del={this.del}/>
        </div>
    }
}

export default Main;