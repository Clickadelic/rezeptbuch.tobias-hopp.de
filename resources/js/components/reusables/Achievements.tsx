import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Trophy, Leaf } from "lucide-react";

const achievements = [
  { id: 1, name: "10 Rezepte erstellt", icon: <Trophy className="w-6 h-6" />, unlocked: true },
  { id: 2, name: "5 Rezepte bewertet", icon: <Star className="w-6 h-6" />, unlocked: true },
  { id: 3, name: "Erstes gesundes Rezept", icon: <Leaf className="w-6 h-6" />, unlocked: false },
];

const streakDays = [true, true, true, true, true, true, true]; // letzte 7 Tage, true = aktiv

export default function DashboardAchievements() {
  return (
    <div className="space-y-6">
      {/* Achievement Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-4">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                a.unlocked ? "bg-green-100 border-green-300" : "bg-gray-100 border-gray-300 opacity-50"
              }`}
            >
              {a.icon}
              <span className="mt-2 text-sm text-center">{a.name}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Streak */}
      <Card>
        <CardHeader>
          <CardTitle>Aktive Streak</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-1">
          {streakDays.map((active, idx) => (
            <div
              key={idx}
              className={`w-6 h-6 rounded-full ${active ? "bg-green-500" : "bg-gray-300"}`}
              title={`Tag ${idx + 1}`}
            />
          ))}
          <span className="ml-4 text-sm font-medium">
            {streakDays.filter(Boolean).length} Tage aktiv
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
