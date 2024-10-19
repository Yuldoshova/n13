import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities';
import { isValidObjectId, Model } from 'mongoose';
import { CreateReviewRequest } from './interfaces';

@Injectable()
export class ReviewService {

  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<Review>
  ) { }

  async create(create: CreateReviewRequest) {
    if (!isValidObjectId(create.userId)) {
      throw new BadRequestException("User id type must be object id")
    }

    const newReview = await this.reviewModel.create({
      content: create.content,
      user: create.userId
    })
    return newReview;
  }

  async findAll() {
    return await this.reviewModel.find().populate("user")
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
