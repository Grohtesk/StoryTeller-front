import { Protagonist } from './protagonist';
import { mongoose } from 'mongoose';

export class Story{
	
	id: mongoose.Schema.Types.ObjectId;
	title: String
	subtitle: String
    pitch: String
    map: Object
    protagonists: Array<Protagonist>
    timeline: Object
    
}