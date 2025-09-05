<?php

namespace App\Enums;

enum Difficulty: string
{
    case EASY = 'EASY'; // Was nacher in die DB eingefügt wird
    case MEDIUM = 'MEDIUM';
    case HARD = 'HARD';
}