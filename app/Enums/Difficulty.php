<?php

namespace App\Enums;

enum Difficulty: string
{
    case EASY = 'einfach';
    case MEDIUM = 'mittel';
    case HARD = 'schwer';
    case EXPERT = 'experte';
}