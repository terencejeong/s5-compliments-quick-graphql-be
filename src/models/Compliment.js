import mongoose from 'mongoose';
const { Schema } = mongoose;

const complimentSchema = new Schema ({
  compliment: String,
  toStaffMember: String,
  timestamp: {
    type: Date,
    default: Date.now()
  },
  lastDayOfWeek: {
    type: Date,
    default: Date.now()
  },
});

export const Compliment = mongoose.model('compliment', complimentSchema);
